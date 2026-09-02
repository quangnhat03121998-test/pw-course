import { test, expect } from '@playwright/test';

test('Bài học 4: Personal notes', async ({ page }) => {

    await test.step('Thêm mới 10 node', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
        // Nhập thông tin cho 10 node
        const personalNote = [
            { Title: 'click', Content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web' },
            { Title: 'fill', Content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web' },
            { Title: 'type', Content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng' },
            { Title: 'hover', Content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover' },
            { Title: 'check', Content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked' },
            { Title: 'uncheck', Content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked' },
            { Title: 'selectOption', Content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown' },
            { Title: 'press', Content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác' },
            { Title: 'dblclick', Content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web' },
            { Title: 'dragAndDrop', Content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web' },
        ];
        for (let i = 0; i < personalNote.length; i++) {
            await page.locator('//input[@id="note-title"]').fill(personalNote[i].Title);
            await page.locator('//textarea[@id="note-content"]').fill(personalNote[i].Content);
            await page.locator('//button[@id="add-note"]').click();
        };
        // kiểm tra số note
        await expect(page.locator('//div[@id="note-count"]')).toHaveText('Total Notes: 10');
    });

    await test.step('Thực hiện search với keyword “một hoặc nhiều”', async () => {
        await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
    });
}); 