# Link Shortener - Step 1

This is the first progress submission for the final full-stack project.

## What is included in this step

- Initial Next.js project structure
- PostgreSQL setup with Docker Compose
- Prisma setup
- Database models:
  - User
  - ShortLink
  - ClickEvent
  - Tag
  - LinkTag
- Role enum:
  - USER
  - ADMIN
- Initial seed data for one admin user, one normal user, tags, a short link, and click events
- A basic API route at `/api/health` to verify backend/database connectivity

## Run locally

```bash
npm install
docker compose up -d
npm run db:migrate -- --name init
npm run db:seed
npm run dev
```

Then open:

```txt
http://localhost:3000
```

Health check:

```txt
http://localhost:3000/api/health
```

## Seed users

```txt
Admin: admin@example.com / admin123456
User: user@example.com / user123456
```

## Progress report text for TA

ارسال مرحله ۱: ساختار اولیه پروژه URL Shortener با Next.js و PostgreSQL آماده شد.
مدل‌های اصلی دیتابیس شامل User, ShortLink, ClickEvent, Tag و LinkTag طراحی شدند و روابط User به لینک‌ها، لینک به کلیک‌ها و رابطه many-to-many بین لینک‌ها و تگ‌ها پیاده‌سازی شد.
همچنین Prisma، فایل env، اتصال دیتابیس و seed اولیه برای کاربر Admin و User اضافه شد.
