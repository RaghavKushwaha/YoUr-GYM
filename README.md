## 💪 YoUr GYM - Fitness Website

A modern, responsive fitness gym website built with HTML, CSS, and JavaScript. YoUr GYM is India's premier fitness destination offering cutting-edge equipment, expert trainers, and flexible membership plans.

## 🌐 Live Pages

### 1. **Home Page** (`index.html`)

- Welcome hero section with call-to-action
- About YoUr GYM with key highlights
- Workout programs preview (Strength Training, Cardio & Conditioning, Yoga & Flexibility)
- Meet our expert trainers section with trainer cards
- Membership plans preview
- Mobile-responsive navigation bar
- Dark mode toggle

### 2. **About Us Page** (`about.html`)

- Detailed information about the gym
- Gym facilities and amenities
- Mission and vision
- Community information

### 3. **Plans Page** (`plans.html`)

- Complete membership plans listing
- Pricing details:
  - 🚀 Monthly Pass: ₹5,000/month
  - ⭐ Quarterly Pass: ₹13,500/3 months
  - 👑 Annual Pass: ₹45,000/year
- Plan features and benefits comparison

### 4. **Workouts Page** (`workouts.html`)

- Detailed workout programs
- Exercise types and categories
- Training routines and schedules
- Program descriptions

### 5. **Contact Us Page** (`contact.html`)

- Contact form for inquiries
- Location and contact details
- Message submission functionality

### 6. **Login Page** (`login.html`)

- User authentication system
- Email and password validation
- Session management
- **Only one user can be logged in at a time**
- Display logged-in user email
- Option to logout and login with different account

## 🔐 Authentication System

### Features:

- **Single User Login**: Only one user can be logged in at a time
- **Session Management**: Uses localStorage to store user data
- **Email Validation**: Requires valid email format
- **Password Requirements**: Minimum 6 characters
- **Logout Feature**: Secure logout with confirmation
- **Login Status Display**: Shows current logged-in user in navigation bar
- **Modal Login**: Quick login from any page (Subscribe buttons)

### How It Works:

1. User logs in with email and password
2. System stores `isLoggedIn`, `userEmail`, and `userName` in localStorage
3. Navigation bar updates to show "Logout (username)"
4. If user tries to login while already logged in, system prevents it
5. User must logout first to use different account
6. Logout clears all session data

## 📁 Project Structure

```
YoUr GYM/
├── index.html         # Home page
├── about.html         # About Us page
├── plans.html         # Membership plans page
├── workouts.html      # Workout programs page
├── contact.html       # Contact Us page
├── login.html         # Login & authentication page
├── script.js          # JavaScript functionality
├── styles.css         # CSS styling
├── logo.png           # Gym logo
└── README.md          # Project documentation
```

## 🎨 Features & Technologies

### Frontend Features:

- ✅ Responsive Mobile Design
- ✅ Dark Mode / Light Mode Toggle
- ✅ Mobile Navigation (Hamburger Menu)
- ✅ Login Modal Popup
- ✅ User Authentication with localStorage
- ✅ Form Validation
- ✅ Smooth Transitions & Animations
- ✅ Professional UI/UX Design

### Technologies Used:

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (Vanilla)**: No frameworks, pure JavaScript
- **localStorage API**: For session management
- **Responsive Design**: Mobile-first approach

## 🚀 How To Use

1. **Open in Browser**:
   - Simply open `index.html` in your web browser
   - Navigate using the top navigation bar

2. **Mobile Menu**:
   - Click hamburger icon (☰) for mobile navigation
   - Menu auto-closes when a link is clicked

3. **Dark Mode**:
   - Click the moon icon (🌙) in top right corner
   - Toggle between dark and light themes
   - Preference is saved in localStorage

4. **Login**:
   - Click "Login" in navigation bar
   - Or click "Subscribe" or "Get Started" buttons
   - Enter email and password (min 6 characters)
   - Only one account can be logged in at a time
   - Logout from navigation bar when done

5. **Navigation**:
   - Home: Main landing page
   - About Us: Gym information
   - Plans: Membership pricing
   - Workouts: Training programs
   - Contact Us: Get in touch

## 👥 Expert Trainers

### 1. **Rahul Sharma** - Head Trainer

- Specialization: Strength & Conditioning
- Experience: 15+ years
- Skills: Strength • Gym • Nutrition

### 2. **Priya Verma** - Cardio Specialist

- Specialization: Weight Loss & Cardio
- Experience: 12+ years
- Skills: Cardio • Weight Loss • HIIT
- Achievement: Helped 1000+ clients

### 3. **Arjun Singh** - Yoga Coach

- Specialization: Yoga & Flexibility
- Experience: 10+ years
- Skills: Yoga • Flexibility • Wellness
- Certification: Certified Yoga Instructor

## 💰 Membership Plans

| Plan           | Price   | Duration | Includes                                                        |
| -------------- | ------- | -------- | --------------------------------------------------------------- |
| Monthly Pass   | ₹5,000  | 1 month  | Full gym access, All equipment, Locker facility                 |
| Quarterly Pass | ₹13,500 | 3 months | Everything in Monthly + Free group classes + Fitness assessment |
| Annual Pass    | ₹45,000 | 1 year   | Everything + Personal trainer + Diet consultation               |

## 🎯 Gym Highlights

- **10+ Years** of experience serving the fitness community
- **500+ Active Members** in our fitness family
- **24/7 Access** - Train whenever you want
- **State-of-the-art Equipment**
- **Expert Training** from certified professionals
- **Community Support** and motivation

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Key JavaScript Functions

### Authentication:

- `updateLoginStatus()` - Updates login/logout display
- `handleLogout(event)` - Handles user logout
- `showLoginModal()` - Shows login modal popup
- `handleModalLogin(event)` - Processes modal login
- `checkLogin()` - Checks if user is already logged in

### Theme:

- `toggleTheme()` - Switches between dark and light mode
- `initializeTheme()` - Loads saved theme preference

### Navigation:

- `updateActiveLink()` - Highlights active page in nav
- Mobile menu toggle for hamburger navigation

## 🔒 Security Notes

- Uses client-side localStorage for session management
- Password validation (minimum 6 characters)
- Email format validation
- Logout clears all sensitive data
- Single user session enforcement

## 📝 Notes for Future Development

- Consider backend authentication for production
- Add password reset functionality
- Implement payment gateway for subscriptions
- Add user profile management
- Email verification system
- Admin dashboard for gym management

## 📞 Contact Information

- Email: contact@yourgym.com
- Location: India
- Hours: Open 24/7

---

**Version**: 1.0  
**Last Updated**: April 18, 2026  
**Created by**: YoUr GYM Team
