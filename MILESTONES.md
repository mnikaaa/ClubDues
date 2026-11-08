# Milestones

## M0 Proposal (week 3)

**Which story did you cut from the MVP, and why?**

I cut story 7 (unpaid members list) from the MVP. The treasurer can already see all members and payments without it, so it is a convenience feature. I will build it only if I have time after the must-have stories (1 to 6) work.

## M1 Frontend prototype (week 5)

**What state lives in the store and what stays inside a component? Why?**

The Pinia store holds data that more than one page needs: the list of clubs, the selected club, and their loading and error flags. This way the data is fetched in one place and every page shows the same thing, instead of each page fetching and tracking its own copy. State that only one component uses stays inside that component, such as what the user types in the login form and its validation error messages. No other page needs them, so keeping them local keeps the store small and easy to understand.

### Checklist
- Wireframes: `docs/wireframes/`
- Vue 3 + TypeScript app with Vite in `web/`, strict mode on, ESLint passes (`npm run lint`)
- Routes: `/clubs`, `/clubs/:id` (detail page with route parameter), `/my-payments`, `/login`
- Form with client-side validation: login form (`LoginView.vue`)
- Pinia store (`stores/clubs.ts`) and service layer (`services/clubService.ts`) calling a mock API (json-server, `web/db.json`)
- Loading, empty and error states: club list and club detail pages

### How to run
1. `cd web`
2. `npm install`
3. `npm run mock` (fake API on port 3000)
4. In a second terminal: `npm run dev` (app on http://localhost:5173)