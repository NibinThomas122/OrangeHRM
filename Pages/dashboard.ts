import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly leaveMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leaveMenu = page.locator('//span[text()="Leave"]');
  }

  async clickLeave() {
    await this.leaveMenu.click();
  }
}