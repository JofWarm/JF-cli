import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';  // 新增，用于执行命令行
import { createProjectWithVueCLI } from './vueCliCreate.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const localTemplates = ['vue-basic', 'login-vue3'];

export async function createProject() {
  console.log(chalk.green.bold('\n✨ 欢迎使用 JF CLI 脚手架'));

  const { projectName, template } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称:',
      default: 'my-vue-app',
      validate(input) {
        if (!input) return '项目名称不能为空';
        if (fs.existsSync(path.resolve(process.cwd(), input))) {
          return '当前目录已存在同名文件夹，请换个名字';
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'template',
      message: '请选择模板:',
      choices: [...localTemplates, 'vue-cli']
    }
  ]);

  if (template === 'vue-cli') {
    await createProjectWithVueCLI(projectName);
  } else {
    // 本地模板逻辑
    const templateDir = path.resolve(__dirname, '../lib/templates', template);
    const targetDir = path.resolve(process.cwd(), projectName);

    await fs.copy(templateDir, targetDir);
    console.log(chalk.blue(`模板 ${template} 复制完成`));

    // 修改 package.json 名称
    const pkgPath = path.join(targetDir, 'package.json');
    const pkg = await fs.readJson(pkgPath);
    pkg.name = projectName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });

    // 自动安装依赖
    console.log(chalk.green('开始安装依赖，请稍候...'));
    await new Promise((resolve, reject) => {
      const child = exec('npm install', { cwd: targetDir }, (error, stdout, stderr) => {
        if (error) {
          console.log(chalk.red('依赖安装失败，请手动执行 npm install'));
          console.error(stderr);
          reject(error);
          return;
        }
        console.log(chalk.green('依赖安装完成'));
        resolve();
      });

      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);
    });

    console.log(chalk.green(`\n项目创建成功！进入目录：cd ${projectName}\n运行：npm run dev\n`));
  }
}
