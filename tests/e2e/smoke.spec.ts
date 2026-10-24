import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/rooms",
  "/gallery",
  "/tours",
  "/events",
  "/book",
  "/contact",
];

for (const route of routes) {
  test(`${route} renders without horizontal overflow`, async ({ page }) => {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("h1")).toBeVisible();
    const overflows = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(overflows).toBe(false);
  });
}

test("room booking action preselects the apartment", async ({ page }) => {
  await page.goto("/rooms/santorini");
  await page.getByRole("link", { name: "Request this apartment" }).click();
  await expect(page.getByLabel("Apartment")).toHaveValue("santorini");
});

test("footer exposes every verified social channel", async ({ page }) => {
  await page.goto("/");
  const expectedLinks = {
    Instagram: "https://www.instagram.com/the12bynaji/",
    TikTok: "https://www.tiktok.com/@the12bynaji_",
    Facebook: "https://www.facebook.com/profile.php?id=61572388719938",
    YouTube: "https://www.youtube.com/@The12ByNajiResort",
    WhatsApp: "https://wa.me/2349018289732",
  };

  for (const [name, href] of Object.entries(expectedLinks)) {
    const link = page.getByRole("link", {
      name: `Visit The 12 by Naji Resort on ${name}`,
    });
    await expect(link.first()).toHaveAttribute("href", href);
    await expect(link.first().locator("svg")).toBeVisible();
  }
});

test("header uses the transparent resort mark", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.locator('header img[src*="the12-by-naji-mark-transparent"]'),
  ).toBeVisible();
});

test("contact page uses the branded WhatsApp action", async ({ page }) => {
  await page.goto("/contact");
  const whatsapp = page.getByRole("link", {
    name: "Message The 12 by Naji Resort on WhatsApp",
  });
  await expect(whatsapp).toHaveAttribute("href", "https://wa.me/2349018289732");
  await expect(whatsapp.locator('[data-social-icon="whatsapp"]')).toBeVisible();
  await expect(whatsapp).toContainText("Message the resort");
});

test("gallery supports keyboard navigation and escape", async ({ page }) => {
  await page.goto("/gallery");
  await page.getByRole("button", { name: /Open image 1 of 30/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("dialog")).toContainText("02 / 30");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("booking form exposes validation errors", async ({ page }) => {
  await page.goto("/book");
  await page.getByRole("button", { name: "Request booking" }).click();
  await expect(page.getByText("Enter your full name")).toBeVisible();
  await expect(
    page.getByRole("alert").filter({ hasText: "Select an apartment" }),
  ).toBeVisible();
});

test("mobile navigation opens and returns focus", async ({
  page,
  isMobile,
}) => {
  test.skip(
    !isMobile,
    "Mobile navigation is only rendered below the desktop breakpoint",
  );
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});
