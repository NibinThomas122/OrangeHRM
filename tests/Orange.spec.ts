import {test, Page,expect } from "@playwright/test";
import LoginPage from "../Pages/login";
import { DashboardPage } from "../Pages/dashboard";
import { LeavePage } from "../Pages/leavePage";

const testData = {
  leaveType: 'Paid Leave' // Update with actual leave type value
};

test.describe.serial('Orange-HRM login', () => {
  let page: Page;

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.login();
});
test('Verify successful login', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const leave = new LeavePage(page);
  await dashboard.clickLeave();
  await leave.applyLeave(testData.leaveType);
});
});
