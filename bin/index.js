#!/usr/bin/env node

import { createProject } from '../lib/createProject.js';

async function run() {
  try {
    await createProject();
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
