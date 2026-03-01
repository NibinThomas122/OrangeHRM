import { Page, Locator } from "@playwright/test";

export class LeavePage {
  readonly page: Page;
  readonly applyTab: Locator;
  readonly leaveTypeDropdown: Locator;
  readonly fromDate: Locator;
  readonly toDate: Locator;
  readonly applyButton: Locator;
  readonly myLeavesTab: Locator;
  readonly leaveSummaryTab: Locator;

  constructor(page: Page) {
    this.page = page;

    // Apply Leave
    this.applyTab = page.locator('//a[text()="Apply"]');
    this.leaveTypeDropdown = page.locator(".oxd-select-text");
    this.fromDate = page.getByRole("textbox", { name: "yyyy-dd-mm" }).first();
    this.toDate = page.locator('input[placeholder="yyyy-mm-dd"]').nth(1);
    this.applyButton = page.locator('//button[@type="submit"]');
    this.myLeavesTab = page.getByRole("link", { name: "My Leave" });
    this.leaveSummaryTab = page.getByText('My Leave', { exact: true });

    // Leave Summary
    this.leaveSummaryTab = page.locator('//a[text()="Leave Summary"]');
  }

  async applyLeave(leaveType: string) {
    await this.applyTab.click();
    await this.leaveTypeDropdown.click();
    await this.page.getByRole("option", { name: "CAN - Personal" }).click();

    await this.fromDate.click();
    await this.page.getByText("14", { exact: true }).click();

    await this.applyButton.click();
  }

  
 
  
}
