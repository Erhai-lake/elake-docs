import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DocsDirectory = path.join(__dirname, 'Docs')
const OutputFile = 'public/CommitRecords.json'

// 递归遍历目录以获取所有 .md 文件路径
const WalkDirectory = (Dir) => {
    let FilesList = []
    const Items = fs.readdirSync(Dir)
    Items.forEach(Item => {
        const ItemPath = path.join(Dir, Item)
        const Stat = fs.statSync(ItemPath)
        if (Stat.isDirectory()) {
            FilesList = FilesList.concat(WalkDirectory(ItemPath))
        } else if (path.extname(Item) === '.md') {
            FilesList.push(ItemPath);
        }
    })
    return FilesList
}

// 执行 git log 并解析输出
const GetGitLog = (File) => {
    try {
        const GitLog = execSync(`git log --pretty=format:"%H%n%s%n%an%n%at%n" --reverse ${File}`)
        const LogLines = GitLog.toString().trim().split('\n')
        const Commits = []
        for (let i = 0; i < LogLines.length; i += 5) {
            Commits.push({
                Sha: LogLines[i],
                Name: LogLines[i + 2],
                Message: LogLines[i + 1],
                Time: new Date(parseInt(LogLines[i + 3], 10) * 1000).toISOString().split('T')[0]
            })
        }
        return Commits
    } catch (Error) {
        console.error(`获取文件GitLog时出错 ${File}:`, Error)
        return []
    }
}

// 进度条更新函数
const UpdateProgress = (Current, Total) => {
    const Percentage = (Current / Total) * 100
    const Progress = Math.round(Percentage)
    const ProgressBar = '='.repeat(Progress) + ' '.repeat(100 - Progress)
    if (process.stdout && process.stdout.clearLine) {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
    }
    process.stdout.write(`[${ProgressBar}] ${Progress}%\r`)
}

// 主函数
const Main = () => {
    console.log('开始获取提交记录...')
    const Files = WalkDirectory(DocsDirectory)
    const AllCommits = {}
    Files.forEach((File, Index) => {
        const RelativePath = path.relative(DocsDirectory, File).replace(/\\/g, '/')
        AllCommits[RelativePath] = GetGitLog(File)
        UpdateProgress(Index + 1, Files.length)
    })
    if (process.stdout && process.stdout.clearLine) {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
    }
    // 确保public目录存在
    const OutputDir = path.dirname(OutputFile)
    if (!fs.existsSync(OutputDir)) {
        fs.mkdirSync(OutputDir, { recursive: true })
    }
    const AllCommitsJson = JSON.stringify(AllCommits)
    // 将所有提交记录写入 JSON 文件
    fs.writeFileSync(OutputFile, AllCommitsJson)
    console.log(`提交记录已写入${OutputFile}`)
}
Main()
