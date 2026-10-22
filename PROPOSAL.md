### **ClubDues**

**Problem**

Student clubs usually track members and dues in paper notebooks or messy spreadsheets, so treasurers lose track of who has paid and members cannot check their own status. This causes arguments, missed payments and extra work for the treasurer every semester.



**Users and roles**

* Member: registers and logs in, joins clubs, and views their own memberships and payment history.
* Treasurer: creates and manages clubs, approves or removes members, records payments, and sees who still owes dues.



**User stories**

1. As a member, I want to register and log in so that I have my own account. Accepted when: the password is stored hashed; an invalid email or short password shows an error; after login I see my own dashboard.
2. As a treasurer, I want to create and edit a club (name, description, dues amount) so that members can join it. Accepted when: only a treasurer can create a club; the dues amount must be a positive number; I can only edit or delete my own clubs.
3. As a treasurer, I want to record a payment for a member so that the club knows who has paid. Accepted when: the payment has an amount, a date and a member; a member of another treasurer's club cannot be charged; the member's status updates to "paid" when dues are covered.
4. As a member, I want to browse clubs and request to join one so that I can become part of it. Accepted when: I can see the list of clubs; I cannot join the same club twice.
5. As a treasurer, I want to approve or remove membership requests so that only real members are in my club. Accepted when: only the treasurer of that club can approve or remove; the member sees the updated status.
6. As a member, I want to see my payment history so that I know what I have paid. Accepted when: I only see my own payments, never another member's.
7. As a treasurer, I want to see a list of members who have not paid so that I can remind them. Accepted when: the list shows member name and amount owed; paid members do not appear.
8. As a treasurer, I want to search members by name and filter by paid or unpaid, with pages, so that I can find people quickly in a large club. Accepted when: results are paginated (10 per page); search by name works; the filter works with the search.



**MVP scope**

Must have:
1. Register and log in (story 1)
2. Treasurer creates and edits a club (story 2)
3. Treasurer records a payment (story 3)
4. Member browses and joins clubs (story 4)
5. Treasurer approves or removes members (story 5)
6. Member views their payment history (story 6)

Nice to have:
7. Treasurer sees the unpaid members list (story 7)
8. Search + pagination, the stretch feature (story 8)



**Entities**

|Entity|Main attributes|Relations|
|-|-|-|
|User|id, name, email, passwordHash, role (MEMBER / TREASURER)|has many Memberships; has many Clubs (as treasurer)|
|Club|id, name, description, duesAmount, treasurerId	|belongs to a User (treasurer); has many Memberships|
|Membership|id, userId, clubId, status (PENDING / ACTIVE), joinedAt	|belongs to a User and a Club; has many Payments|
|Payment|id, membershipId, amount, paidAt, note|belongs to a Membership|



**Stretch feature**

Search + pagination. What it does in this app: the treasurer can search the members of a club by name, filter by paid or unpaid, and browse results 10 per page. The club list for members is also paginated.



**Repository**

https://github.com/mnikaaa/ClubDues.git