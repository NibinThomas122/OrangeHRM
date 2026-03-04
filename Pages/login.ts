// pages/LoginPage.ts
import { Locator, Page } from "@playwright/test";
import { config } from '../Utils/env-config';
import { environment } from '../Utils/environment';


export default class LoginPage {
  page: Page;
  baseUrl: string;
  username: string;
  password: string;

  constructor(page: Page) {
    this.page = page;
    const env = environment;
    this.baseUrl = config[env].baseUrl;
    this.username = config[env].Username;
    this.password = config[env].Password;
  }

  getusernamefieldlocator = (): Locator =>
    this.page.locator('input[placeholder="username"]');

  getpasswordfieldlocator = (): Locator =>
    this.page.locator('input[placeholder="password"]');

  getsigninbuttonlocator = (): Locator => this.page.getByRole('button', { name: 'Login' });

  async login( ): Promise<void> {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState("domcontentloaded");

    await this.getusernamefieldlocator().fill(this.username);
    await this.getpasswordfieldlocator().waitFor({ state: "visible" });
    await this.getpasswordfieldlocator().fill(this.password);
    await this.getsigninbuttonlocator().click();

    await this.page.waitForLoadState("domcontentloaded");
  }
}
