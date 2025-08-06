import { execSync } from 'child_process';
import chalk from 'chalk';

export function checkVueCLI() {
  try {
    execSync('vue --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

export async function createProjectWithVueCLI(projectName) {
  if (!checkVueCLI()) {
    console.log(chalk.red('❌ 请先全局安装 @vue/cli：npm install -g @vue/cli'));
    process.exit(1);
  }

  console.log(chalk.green(`🚀 使用 Vue CLI 创建项目：${projectName}`));

  try {
    // --default 使用官方默认配置，用户可自行后续调整
    execSync(`vue create ${projectName} --default`, { stdio: 'inherit' });
    console.log(chalk.green('✅ Vue CLI 项目创建完成！'));
  } catch (err) {
    console.error(chalk.red('❌ Vue CLI 创建失败！'), err);
  }
}
