import { test } from '@playwright/test';

test('Bài học 3: Todo page', async ({ page }) => {

    await test.step('Thêm mới 100 todo item', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
        //Thêm mới 100 item với nội dung Todo<1>
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo[${i}]`);
            await page.locator('//button[@id="add-task"]').click();
        };
    });
    await test.step('Xóa các todo item có số lẻ ', async () => {
        page.on('dialog', async dialog => await dialog.accept());
        for (let k = 1; k <= 100; k++) {
            if (k % 2 === 1) {
                await page.locator(`//button[@id="todo-${k}--delete"]`).click();
            };
        };
    });
});
