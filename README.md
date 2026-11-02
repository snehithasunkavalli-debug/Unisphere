# UniSphere: Integrated Smart Campus Enterprise Portal

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-HTML5_|_CSS3_|_JavaScript_|_PHP-blue?style=for-the-badge)
![Institution](https://img.shields.io/badge/Institution-VIT_Vellore_(SCOPE)-1e3a8a?style=for-the-badge)

> **All University Systems. One Intelligent Hub.**  
> A centralized, digital campus operating system consolidating 45+ academic, administrative, healthcare, and student services into a responsive, single-entry web platform.

---

## 👩‍💻 Student & Developer Profile

* **Developer:** **Snehitha Sunkavalli**
* **Register Number:** **24MIC0058**
* **Degree Program:** Integrated M.Tech in Computer Science and Engineering (5-Year Dual Degree)
* **School:** School of Computer Science and Engineering (SCOPE)
* **Institution:** Vellore Institute of Technology (VIT), Vellore - 632014, India
* **Developer Portfolio:** [View Portfolio](Protofolio.html)

---

## 📌 Project Overview & Problem Statement

### The Problem
Traditional higher education institutions suffer from **digital fragmentation**. Students, faculty, and administrative staff are forced to navigate disconnected portals for admissions, course registrations, library catalogs, hospital health clinics, HR payroll, and campus events. This leads to broken navigation, redundant logins, and poor user experience.

### The Solution: UniSphere
**UniSphere** solves this challenge by providing an enterprise-grade digital campus ecosystem uniting **70 source code files**, **22 media assets**, and **45+ interactive services** under one unified architectural umbrella. 

Key user-centric capabilities include:
* **Live Instant Search:** Instantaneous client-side filtering across all university services.
* **Category Filtering:** 6 functional domain filters (*Academics*, *SCOPE Dept*, *Staff ERP*, *Facilities*, *Clubs*, *Smart Campus*).
* **Universal Floating Navigation:** Every internal page includes a floating badge for one-click return to the central portal hub.
* **Zero Broken Dependencies:** Fully functional forms, interactive scripts, and validated local paths.

---

## 🏛️ Core System Architecture & Modules

The platform is structured into **6 integrated functional pillars**:

```
                                  [ UniSphere Master Portal ]
                                      (index.html)
                                               |
  +--------------------+-----------------------+-----------------------+--------------------+
  |                    |                       |                       |                    |
[ Academics &        [ SCOPE Department     [ Staff & HR ERP        [ Facilities &       [ Clubs, Culture &
  Students ]           Hub ]                   System ]                Healthcare ]         Smart Campus ]
  • Course Reg         • Overview              • Dashboard             • Central Library    • Riviera & Fests
  • Student Login      • Degree Programs       • Directory             • CarePlus Hospital  • Gaming Zone
  • Search Engine      • Faculty Roster        • Payroll Calculator    • Campus Store       • Interstellar Club
  • Portfolio          • Research Labs         • Leave Approval        • Appointment OPD    • Smart City IoT
```

### 1. Academics & Student Lifecycle Hub
* **Course Enrollment System (`course.html`, `course.css`, `course.js`):** Dynamic course registration with live prerequisite verification, credit slot counters, and validation alerts.
* **Student Admissions (`studentregistration.html`, `registration.css`, `registration.js`):** Multi-column admission registration form with real-time field validation.
* **Student Authentication (`student.html`, `stulog.html`):** Single Sign-On (SSO) login with audio guidance and account recovery.
* **Student Registry Search (`stusearch.html`):** Real-time student directory querying by register number and branch.
* **Student Portfolio (`Protofolio.html`):** Academic profile, technical skill credentials, CGPA (9.16), and background of Snehitha Sunkavalli.

### 2. School of Computer Science & Engineering (SCOPE)
* **Department Hub (`DOCS.html`):** Core departmental gateway.
* **Vision & Accreditation (`overview.html`):** Documents departmental ABET and NBA accreditations, supercomputing clusters, and GPU labs.
* **Academic Curricula (`programs.html`):** Syllabi for Integrated M.Tech (CSE), B.Tech, M.Tech, and Ph.D. degrees.
* **Faculty Directory (`faculty.html`):** Interactive directory listing professors, Dean Dr. R. K. Saravanan, office cabins, and email contacts.
* **Research Centers (`research.html`):** Centers for Cloud Computing Methodologies, Cognitive AI, and IoT hardware testbeds.
* **Department Helpdesk (`contact.html`):** Emergency phone lines and feedback inquiry submission.

### 3. Staff & Human Resources ERP
* **Employee Management Dashboard (`dashboard.html`):** Centralized administrative ERP interface.
* **Staff Payroll Engine (`payroll.html`):** Interactive monthly compensation calculator factoring in Basic Pay, DA (38%), HRA (24%), and PF deductions with an official printable pay slip.
* **Leave Management Portal (`leaves.html`):** Real-time leave balance tracking (CL, EL, ML) with submission history and Dean approval workflows.
* **Institutional Performance Reports (`reports.html`):** Graphical data-visualization bar charts tracking school enrollment and staff attendance.
* **Personnel Onboarding & ID Card (`empreg.html`, `EMPID.html`, `Emp.html`, `directory.html`):** Staff onboarding, digital barcode ID card generator, and searchable campus extensions.

### 4. Campus Facilities & Health Services
* **Central Library Management (`LMS.html`):** Book inventory searches, digital research repositories, and RFID issuance.
* **CarePlus Hospital & Health Center (`HMS.html`, `HMW.html`, `hospital.html`):** 24/7 on-campus healthcare facility with physician rosters, ward overviews, and ambulance emergency dispatch.
* **Patient Appointment & Fee Billing (`patient.html`):** Outpatient booking portal with automated consultation fee estimation.
* **Campus E-Commerce Store (`shopindex.html`, `product.html`, `prosearch.html`, `shopcart.html`, `shopcustomer.html`, `shoppayment.html`):** Full e-commerce workflow featuring smart watch showcases, merchandise search, cart summaries, and a multi-channel payment gateway (UPI, Net Banking, Card).

### 5. Student Life, Clubs & International Travel
* **Riviera & Technical Symposiums (`clgEvent.html`, `event.html`, `NTS.html`):** Event schedules and pass bookings for Riviera 2026, Gravitas, and the National Technical Symposium.
* **Campus Gaming Zone (`GZ.html`):** E-sports arena showcasing tournament brackets and workstation bookings.
* **Interstellar Astronomy & Cinema Club (`Interstellar.html`, `cast.html`, `story.html`):** Academic society exploring general relativity, gravitational time dilation, and black holes.
* **International Travel & Study Abroad (`Traveler.html`, `TD.html`, `travelphoto.html`):** Destination guides for Paris, Tokyo, Zurich, London, and Maldives.
* **Interactive Visual Campus Tour (`unicam.html`, `gallery.html`):** Keyboard-driven visual campus tour (using arrow keys & Enter) and master media archive.

### 6. Smart Campus IoT & Innovation Labs
* **Smart Campus ATM Terminal (`ATM.html`):** Micro-banking simulator with PIN entry and transaction feedback.
* **Smart Traffic Light Simulator (`traffic.html`):** Automated traffic light controller state simulation for campus vehicle gates.
* **Meteorological Station (`weather.html`):** Real-time telemetry monitoring ambient temperature and humidity.
* **Single Sign-On (SSO) Portal (`userauth.html`):** Unified multi-role login gateway.
* **Developer Labs (`javamouse.html`, `input_types.html`, `layout1.html`, `onex.html`, `CP.html`, `DSE.html`, `SAT.html`):** Interactive JavaScript mouse event tracking, HTML5 input controls, and CSS grid layout architecture demonstrations.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Markup & Structure** | Semantic **HTML5** (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) |
| **Styling & Design** | Modern **CSS3** (CSS Grid, Flexbox, Custom Properties/Variables, Responsive Media Queries) |
| **Client-Side Logic** | Vanilla **JavaScript (ES6)** (DOM Manipulation, Regex Form Validation, Event Listeners) |
| **Backend & Routing** | **PHP 8.x** (Apache Server Auto-Routing & Redirects) |
| **Local Web Server** | **Apache HTTP Server** via **XAMPP Control Panel** (Port 80) |
| **Design Typography** | Plus Jakarta Sans, Segoe UI, Roboto, Consolas |

---

## 📂 Source Code File Directory

```
FrontEnd_Mini/
├── index.html       # Flagship Master Portal Dashboard (1,020 lines)
├── home.html                # University Landing Page
├── index.php                # Server Auto-Router for XAMPP
├── index.html               # Fallback Meta-Refresh Redirect
├── Protofolio.html          # Snehitha Sunkavalli Student Portfolio
├── README.md                # Project Documentation & Architecture Guide
│
├── css/ (Stylesheets)
│   ├── style.css            # Primary Global Design System
│   ├── course.css           # Course Registration Styling
│   ├── employee.css         # Staff ERP Login & Form Styles
│   ├── registration.css     # Admission Form Styles
│   └── student.css          # Student Authentication Styles
│
├── js/ (Client-Side Scripts)
│   ├── course.js            # Course Prerequisite & Slot Logic
│   ├── employee.js          # Staff Login Credential Handling
│   ├── registration.js      # Student Form Validation
│   └── student.js           # Student SSO Handler
│
├── modules/ (HTML Subsystems)
│   ├── Academics: course.html, studentregistration.html, student.html, stulog.html, stusearch.html
│   ├── SCOPE Dept: DOCS.html, overview.html, programs.html, faculty.html, research.html, contact.html
│   ├── Staff ERP: dashboard.html, directory.html, payroll.html, leaves.html, reports.html, empreg.html, EMPID.html, Emp.html
│   ├── Healthcare: HMS.html, HMW.html, hospital.html, patient.html
│   ├── Facilities & Store: LMS.html, shopindex.html, product.html, prosearch.html, shopcart.html, shoppayment.html
│   ├── Clubs & Media: clgEvent.html, event.html, NTS.html, GZ.html, Interstellar.html, cast.html, story.html, gallery.html
│   └── Smart Campus: ATM.html, traffic.html, weather.html, userauth.html, CP.html, DSE.html, SAT.html
│
└── assets/ (22 Media Assets)
    ├── Campus: campus1.jpg, campus2.jpg, campus3.jpg, hosp.png, comlogo.jpeg, logo.jpg
    ├── Library: books.jpg, digitallibrary.jpg, issuebooks.jpg, members.jpg
    ├── Travel: paris.jpg, Paris.jpeg, tokyo.jpg, Tokyo.jpeg, Switzerland.jpeg, Maldives.jpeg, london.jpg
    └── Other: spass.jpeg, watch.jpg, Game.jpg, space.jpg, Interstellar.jpg
```

---

## 🚀 Installation & Running Guide

### Method 1: Local Server via XAMPP (Recommended)
1. Ensure your files are present in your XAMPP web directory:
   * `C:\xampp\htdocs\Final_Website_FrontEnd\` (or `C:\xampp\htdocs\24MIC0058\`)
2. Open the **XAMPP Control Panel** (`C:\xampp\xampp-control.exe`).
3. Click **Start** on the **Apache** service (ensure it turns green on Port 80/443).
4. Open any browser (Chrome, Edge, Firefox) and navigate to:
   ```
   http://localhost/Final_Website_FrontEnd/
   ```
   *(or `http://localhost/24MIC0058/`)*
5. The server will execute `index.php` and automatically load the **UniSphere Master Portal** (`index.html`).

### Method 2: Direct File Execution (Without Web Server)
1. Navigate to:
   ```
   C:\Users\SNEHITHA\.gemini\antigravity\scratch\FrontEnd_Mini\
   ```
2. Double-click **`index.html`** to open it directly in your default web browser.

---

## 📝 Academic Declaration & Acknowledgments

This project was engineered and curated as part of the Web Development curriculum under the **School of Computer Science and Engineering (SCOPE), Vellore Institute of Technology (VIT)**.

* **Author:** Snehitha Sunkavalli
* **Register Number:** 24MIC0058
* **Course:** CSI3001 / Web Development Laboratory
* **Academic Year:** 2026
