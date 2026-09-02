import { test,expect } from '@playwright/test';

test('Bài học 2: Product page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="02-xpath-product-page.html"]').click();
    // Thêm 2 sản phẩm 1 vào giỏ hàng
    for (let i = 1; i <= 2; i++) {
       await page.locator('//button[@data-product-id="1"]').click(); 
    };
    // Kiểm tra số lượng sản phẩm 1
    await expect(page.locator('//tbody[@id="cart-items"]/tr[1]/td[3]')).toHaveText('2');
    // Thêm 3 sản phẩm 2 vào giỏ hàng
    for (let i = 1; i <= 3; i++) {
       await page.locator('//button[@data-product-id="2"]').click(); 
    };
    // Kiểm tra số lượng sản phẩm 2
    await expect(page.locator('//tbody[@id="cart-items"]/tr[2]/td[3]')).toHaveText('3');
    // Thêm 1 sản phẩm 3 vào giỏ hàng 
    await page.locator('//button[@data-product-id="3"]').click();
    // Kiểm tra số lượng sản phẩm 3
    await expect(page.locator('//tbody[@id="cart-items"]/tr[3]/td[3]')).toHaveText('1');
    
});