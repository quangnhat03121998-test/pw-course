import { test } from '@playwright/test';

test('Bài học 1: Register Page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="01-xpath-register-page.html"]').click();

    // Nhập thông tin cho user name
    await page.locator('//input[@id="username"]').fill('zznhat1998zz');
    //Nhập thông tin cho Email 
    await page.locator('//input[@id="email"]').fill('abc@gmail.com');
    // Nhập thông tin cho Gender
    await page.locator('//input[@id="male"]').check();
    // Nhập thông tin cho Hobbies
    await page.locator('//input[@id="reading"]').check();
    // Nhập thông tin cho interest
    await page.locator('//option[@value="technology"]').click();
    // Nhập thông tin cho country
    await page.locator('//select[@id ="country"]').selectOption('uk');
    // Nhập thông tin cho date of birth
    await page.locator('//input[@id="dob"]').fill('1998-12-03');
    // Upload profile picture
    await page.locator('//input[@id="profile"]').setInputFiles('tests/data-test/avatar.jpg');
    // Nhập thông tin biography
    await page.locator('//textarea[@id="bio"]').fill('Nhập biography');
    //Click register
    await page.locator('//button[@type="submit"]').click();

});
