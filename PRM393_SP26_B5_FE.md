# ĐỀ TRẮC NGHIỆM PRM393 - SP26 - B5 - FE

---

### **Câu 1**
**Câu hỏi:** Which widget pattern protects authenticated routes?
- A. Navigator
- B. Guard
- C. Route protection
- D. Middleware

- **Đáp án:** **B. Guard**
- **Giải thích:** Pattern "Route Guard" (hoặc Guard) là mô hình thiết kế dùng để kiểm tra điều kiện (như trạng thái xác thực/đăng nhập của người dùng) trước khi cho phép điều hướng và hiển thị màn hình đích. Nếu chưa xác thực, Guard sẽ chuyển hướng người dùng về trang đăng nhập.
- **Kiến thức thuộc về:** Routing & Navigation / Authentication & Route Guards trong Flutter.

---

### **Câu 2**
**Câu hỏi:** Why are tests important for refactoring?
- A. Reduce UI work
- B. Ensure changes don't break functionality
- C. Improve animations
- D. Change layout

- **Đáp án:** **B. Ensure changes don't break functionality**
- **Giải thích:** Khi tái cấu trúc mã nguồn (refactoring), cấu trúc code bên trong thay đổi nhưng hành vi bên ngoài phải được giữ nguyên. Bộ kiểm thử tự động (Unit/Widget/Integration Tests) giúp phát hiện sớm các lỗi hồi quy (regression bugs), đảm bảo các thay đổi không làm hỏng tính năng sẵn có.
- **Kiến thức thuộc về:** Software Testing / Best Practices in Refactoring.

---

### **Câu 3**
**Câu hỏi:** What is the role of BuildContext in Flutter?
- A. Store application data
- B. Locate widgets in the widget tree
- C. Manage navigation history
- D. Render UI pixels

- **Đáp án:** **B. Locate widgets in the widget tree**
- **Giải thích:** `BuildContext` là một đối tượng đại diện cho vị trí (handle) của một widget cụ thể bên trong cây widget (widget tree). Nó cho phép widget tương tác với các widget tổ tiên (ancestor widgets) như `Theme.of(context)`, `Navigator.of(context)`, `MediaQuery.of(context)`.
- **Kiến thức thuộc về:** Flutter Core Fundamentals / Widget Tree & BuildContext.

---

### **Câu 4**
**Câu hỏi:** What role does the Flutter framework play in application development?
- A. It manages database servers
- B. It provides UI components and rendering logic
- C. It replaces the operating system
- D. It runs backend business logic

- **Đáp án:** **B. It provides UI components and rendering logic**
- **Giải thích:** Flutter là một UI toolkit đa nền tảng, cung cấp tập hợp các widget giao diện dựng sẵn (Material Design, Cupertino) cùng với engine/pipeline vẽ đồ họa và logic render độc lập với hệ điều hành gốc.
- **Kiến thức thuộc về:** Flutter Architecture & Overview.

---

### **Câu 5**
**Câu hỏi:** How is the Flutter UI constructed internally?
- A. Using XML layout files
- B. Using HTML and CSS
- C. Using a hierarchical widget tree
- D. Using native UI components only

- **Đáp án:** **C. Using a hierarchical widget tree**
- **Giải thích:** Giao diện Flutter được xây dựng hoàn toàn bằng ngôn ngữ Dart dưới dạng một cây widget có cấu trúc phân cấp (hierarchical widget tree), trong đó các widget cha lồng các widget con.
- **Kiến thức thuộc về:** Flutter UI Architecture / Widget Tree Structure.

---

### **Câu 6**
**Câu hỏi:** Which widget enables custom scroll effects in Flutter?
- A. ListView
- B. SingleChildScrollView
- C. CustomScrollView
- D. Column

- **Đáp án:** **C. CustomScrollView**
- **Giải thích:** `CustomScrollView` cho phép kết hợp trực tiếp nhiều thành phần cuộn dạng `Sliver` (như `SliverAppBar`, `SliverList`, `SliverGrid`) để tạo ra các hiệu ứng cuộn tùy biến phức tạp và mượt mà.
- **Kiến thức thuộc về:** Flutter UI & Scrolling / CustomScrollView & Slivers.

---

### **Câu 7**
**Câu hỏi:** Which practice improves rendering performance?
- A. Large widget trees
- B. Splitting widgets
- C. Global state
- D. Frequent rebuilds

- **Đáp án:** **B. Splitting widgets**
- **Giải thích:** Tách nhỏ các widget phức tạp thành các widget riêng biệt (extract widget) giúp Flutter giới hạn phạm vi rebuild (rebuild scope) chỉ ở những phần thực sự có thay đổi state, từ đó cải thiện đáng kể hiệu năng render.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Widget Tree Refactoring.

---

### **Câu 8**
**Câu hỏi:** What does an integration test verify?
- A. Single function
- B. Widget rendering
- C. End-to-end app behavior
- D. Theme consistency

- **Đáp án:** **C. End-to-end app behavior**
- **Giải thích:** Kiểm thử tích hợp (Integration Test) kiểm tra toàn bộ luồng hành vi từ đầu đến cuối (End-to-End) của ứng dụng hoặc sự kết hợp tương tác giữa nhiều hệ thống/màn hình trên thiết bị thật hoặc giả lập.
- **Kiến thức thuộc về:** Testing in Flutter / Integration & E2E Testing.

---

### **Câu 9**
**Câu hỏi:** Why is separating UI and state logic recommended?
- A. Reduce code size
- B. Improve maintainability
- C. Faster execution
- D. Better animations

- **Đáp án:** **B. Improve maintainability**
- **Giải thích:** Phân tách rõ ràng giữa tầng giao diện (UI) và tầng quản lý trạng thái/logic nghiệp vụ (State/Business Logic) tuân thủ nguyên lý Separation of Concerns, giúp mã nguồn dễ đọc, dễ bảo trì, dễ mở rộng và thuận tiện cho việc viết unit test.
- **Kiến thức thuộc về:** Software Architecture & State Management Principles.

---

### **Câu 10**
**Câu hỏi:** When does Flutter rebuild the widget tree?
- A. On every frame
- B. When state changes
- C. Only when app restarts
- D. Only during hot restart

- **Đáp án:** **B. When state changes**
- **Giải thích:** Flutter là declarative framework; nó chỉ gọi lại phương thức `build()` và cập nhật lại cây widget khi trạng thái dữ liệu (state) thay đổi (ví dụ khi gọi `setState()`, nhận state mới từ BLoC/Provider, hoặc các dependencies thay đổi).
- **Kiến thức thuộc về:** Flutter Fundamentals / Reactive Lifecycle & State Changes.

---

### **Câu 11**
**Câu hỏi:** Which concept does BLoC heavily rely on?
- A. Future
- B. Stream
- C. Animation
- D. Theme

- **Đáp án:** **B. Stream**
- **Giải thích:** BLoC (Business Logic Component) được xây dựng dựa trên nền tảng Reactive Programming và cơ chế `Stream` trong Dart để nhận luồng Events đầu vào và phát ra luồng States đầu ra liên tục theo thời gian thực.
- **Kiến thức thuộc về:** State Management / BLoC Pattern & Dart Streams.

---

### **Câu 12**
**Câu hỏi:** Why is version control critical?
- A. UI changes
- B. Track and manage code changes
- C. Improve animations
- D. Store data

- **Đáp án:** **B. Track and manage code changes**
- **Giải thích:** Hệ thống quản lý phiên bản (như Git) đóng vai trò then chốt trong việc theo dõi lịch sử chỉnh sửa mã nguồn, quản lý các nhánh phát triển, hỗ trợ làm việc nhóm và rollback khi gặp sự cố.
- **Kiến thức thuộc về:** Software Engineering / Version Control Systems (VCS / Git).

---

### **Câu 13**
**Câu hỏi:** Why is immutability important in BLoC states?
- A. UI speed
- B. Predictable state changes
- C. Memory usage
- D. Theme control

- **Đáp án:** **B. Predictable state changes**
- **Giải thích:** Tính bất biến (Immutability) đảm bảo rằng mỗi state phát ra là một bản chụp (snapshot) dữ liệu cố định không thể bị biến đổi ngầm, giúp luồng dữ liệu trở nên nhất quán, dễ dự đoán hành vi ứng dụng và dễ dàng so sánh sự thay đổi state (`==`).
- **Kiến thức thuộc về:** State Management / BLoC Architecture & Immutability.

---

### **Câu 14**
**Câu hỏi:** Which Flutter plugin provides SQLite support?
- A. hive
- B. moor
- C. sqflite
- D. shared_preferences

- **Đáp án:** **C. sqflite**
- **Giải thích:** `sqflite` là plugin chính thức và thông dụng nhất trong hệ sinh thái Flutter dùng để thao tác với cơ sở dữ liệu quan hệ cục bộ SQLite (hỗ trợ CRUD, transaction, schema migration).
- **Kiến thức thuộc về:** Local Data Persistence / SQLite & `sqflite` package.

---

### **Câu 15**
**Câu hỏi:** What is the main benefit of using Maps in Dart?
- A. Storing values without keys
- B. Storing key-value pairs
- C. Rendering UI components
- D. Managing asynchronous tasks

- **Đáp án:** **B. Storing key-value pairs**
- **Giải thích:** `Map` trong Dart là tập hợp lưu trữ dữ liệu có cấu trúc theo cặp khóa - giá trị (key-value), cho phép truy xuất, cập nhật giá trị nhanh chóng thông qua khóa (key) tương ứng.
- **Kiến thức thuộc về:** Dart Core / Collections (Map, List, Set).

---

### **Câu 16**
**Câu hỏi:** Which tool helps analyze UI performance in Flutter?
- A. Inspector
- B. DevTools
- C. Emulator
- D. Hot reload

- **Đáp án:** **B. DevTools**
- **Giải thích:** Flutter DevTools là bộ công cụ hoàn chỉnh chạy trên trình duyệt cung cấp các công cụ phân tích hiệu năng chuyên sâu như Timeline, CPU Profiler, Memory Profiler, Network Inspector và Performance View (đo khung hình 60/120 fps, phát hiện jank).
- **Kiến thức thuộc về:** Tooling & Diagnostics / Flutter DevTools & Performance Profiling.

---

### **Câu 17**
**Câu hỏi:** What does a Dart class primarily represent?
- A. A UI widget only
- B. A blueprint for creating objects
- C. A database table
- D. A network request

- **Đáp án:** **B. A blueprint for creating objects**
- **Giải thích:** Trong lập trình hướng đối tượng (OOP) và Dart, Class là bản thiết kế/khuôn mẫu định nghĩa các thuộc tính (fields/properties) và hành vi (methods) để từ đó khởi tạo ra các đối tượng (objects/instances).
- **Kiến thức thuộc về:** Dart OOP Fundamentals / Classes and Objects.

---

### **Câu 18**
**Câu hỏi:** What is the purpose of SliverAppBar?
- A. Static app bar
- B. Scrollable flexible app bar
- C. Bottom navigation
- D. Drawer control

- **Đáp án:** **B. Scrollable flexible app bar**
- **Giải thích:** `SliverAppBar` là thanh tiêu đề ứng dụng linh hoạt có thể cuộn, co giãn (expand/collapse), ghim cố định (pinned) hoặc nổi (floating) theo chuyển động cuộn của người dùng trong `CustomScrollView`.
- **Kiến thức thuộc về:** Flutter UI Components / Slivers (`SliverAppBar`).

---

### **Câu 19**
**Câu hỏi:** What is Hive mainly used for?
- A. Remote database
- B. Lightweight local NoSQL storage
- C. State management
- D. Routing

- **Đáp án:** **B. Lightweight local NoSQL storage**
- **Giải thích:** `Hive` là cơ sở dữ liệu key-value NoSQL cục bộ nhẹ, hiệu năng cao, thuần Dart (không cần native dependencies), rất phổ biến để lưu trữ dữ liệu offline, cache và cấu hình ứng dụng.
- **Kiến thức thuộc về:** Local Storage & Data Persistence / NoSQL Database with Hive.

---

### **Câu 20**
**Câu hỏi:** Which HTTP header is commonly used for authorization?
- A. Content-Type
- B. Accept
- C. Authorization
- D. Cache-Control

- **Đáp án:** **C. Authorization**
- **Giải thích:** Header `Authorization` được sử dụng trong các yêu cầu HTTP để truyền thông tin xác thực/ủy quyền của người dùng (ví dụ: `Authorization: Bearer <token>`).
- **Kiến thức thuộc về:** Networking & RESTful APIs / HTTP Request Headers & Authentication.

---

### **Câu 21**
**Câu hỏi:** What does TextEditingController manage?
- A. Theme
- B. Text input value
- C. Validation rules
- D. Layout constraints

- **Đáp án:** **B. Text input value**
- **Giải thích:** `TextEditingController` được gắn vào các widget nhập liệu (`TextField`, `TextFormField`) để theo dõi, lấy giá trị hiện tại, chỉnh sửa nội dung văn bản cũng như lắng nghe các sự kiện thay đổi ký tự.
- **Kiến thức thuộc về:** Flutter UI & Form Handling / TextEditingController.

---

### **Câu 22**
**Câu hỏi:** Why is Dart considered suitable for Flutter development?
- A. It is only used for backend systems
- B. It supports both UI and application logic efficiently
- C. It replaces native languages
- D. It does not support asynchronous programming

- **Đáp án:** **B. It supports both UI and application logic efficiently**
- **Giải thích:** Dart được tối ưu hóa đặc biệt cho client development với cú pháp hướng đối tượng quen thuộc, hỗ trợ cả JIT (Just-In-Time cho Hot Reload nhanh khi dev) và AOT (Ahead-Of-Time biên dịch mã máy tối ưu khi release), đồng thời quản lý UI declarative và async logic mượt mà.
- **Kiến thức thuộc về:** Dart Programming Language / Flutter Architecture & Compilation.

---

### **Câu 23**
**Câu hỏi:** What does the build() method return in a widget?
- A. A screen
- B. A widget tree describing the UI
- C. Application state
- D. Rendered pixels

- **Đáp án:** **B. A widget tree describing the UI**
- **Giải thích:** Hàm `build(BuildContext context)` trong `StatelessWidget` hoặc `State<StatefulWidget>` có nhiệm vụ trả về cấu trúc widget con (widget tree) mô tả giao diện tương ứng với cấu hình và trạng thái hiện tại.
- **Kiến thức thuộc về:** Flutter Fundamentals / Widget Lifecycle & Build Mechanism.

---

### **Câu 24**
**Câu hỏi:** What represents the output of a BLoC?
- A. Events
- B. Widgets
- C. States
- D. Controllers

- **Đáp án:** **C. States**
- **Giải thích:** Trong kiến trúc BLoC, đầu vào (Input) là các sự kiện người dùng tương tác (`Events`), BLoC xử lý nghiệp vụ và phát ra kết quả đầu ra (Output) là các trạng thái mới (`States`).
- **Kiến thức thuộc về:** State Management / BLoC Pattern Architecture (Event-State Flow).

---

### **Câu 25**
**Câu hỏi:** What is Cubit in BLoC?
- A. UI widget
- B. Simplified BLoC without events
- C. Database layer
- D. Animation helper

- **Đáp án:** **B. Simplified BLoC without events**
- **Giải thích:** `Cubit` là một biến thể đơn giản hóa của BLoC trong thư viện `flutter_bloc`. Thay vì phải định nghĩa lớp Event và map event sang state, Cubit cho phép gọi trực tiếp các phương thức (functions) để phát ra State (`emit(state)`).
- **Kiến thức thuộc về:** State Management / Cubit vs BLoC.

---

### **Câu 26**
**Câu hỏi:** Which activity is typically performed after creating a new Flutter project?
- A. Deploying to app stores
- B. Running the default app on a device
- C. Configuring authentication
- D. Optimizing database queries

- **Đáp án:** **B. Running the default app on a device**
- **Giải thích:** Sau khi khởi tạo dự án Flutter mới (`flutter create`), bước thực hành tiêu chuẩn đầu tiên là chạy thử ứng dụng đếm số mặc định (counter app) trên máy ảo (emulator) hoặc thiết bị thật để xác nhận môi trường phát triển đã sẵn sàng và hoạt động ổn định.
- **Kiến thức thuộc về:** Flutter Project Setup / Development Workflow.

---

### **Câu 27**
**Câu hỏi:** Which practice improves deployment security?
- A. Debug builds
- B. Secure signing keys
- C. Hardcoding secrets
- D. Skipping validation

- **Đáp án:** **B. Secure signing keys**
- **Giải thích:** Lưu trữ và quản lý an toàn khóa ký ứng dụng (Keystore cho Android, Distribution Certificate/Provisioning Profile cho iOS) là nguyên tắc bắt buộc để đảm bảo tính xác thực, tránh bị giả mạo và bảo mật ứng dụng khi phát hành.
- **Kiến thức thuộc về:** App Deployment & Security / App Signing & Release Management.

---

### **Câu 28**
**Câu hỏi:** Why is Chapter 14 considered optional (Plus)?
- A. Deployment is UI logic
- B. Apps can be tested without publishing
- C. It replaces authentication
- D. It handles APIs

- **Đáp án:** **B. Apps can be tested without publishing**
- **Giải thích:** Trong giáo trình môn học PRM393, chương triển khai phát hành lên kho ứng dụng (App Store/Google Play) thường là phần tùy chọn/mở rộng (Plus) vì sinh viên và nhà phát triển có thể build, test và cài đặt trực tiếp trên thiết bị (sideloading/debug/release APK) mà không bắt buộc phải xuất bản chính thức lên Store.
- **Kiến thức thuộc về:** PRM393 Course Curriculum / Mobile App Deployment Lifecycle.

---

### **Câu 29**
**Câu hỏi:** What is the primary purpose of ThemeData in Flutter?
- A. Manage navigation
- B. Define application-wide visual styles
- C. Handle state changes
- D. Control animations

- **Đáp án:** **B. Define application-wide visual styles**
- **Giải thích:** `ThemeData` dùng để thiết lập bảng màu (colorScheme), phông chữ (textTheme), kiểu dáng nút bấm (elevatedButtonTheme), thanh tiêu đề (appBarTheme)... áp dụng đồng bộ trên toàn bộ ứng dụng (hỗ trợ Light Mode / Dark Mode).
- **Kiến thức thuộc về:** Flutter UI Design / Theming & Styling (`ThemeData`).

---

### **Câu 30**
**Câu hỏi:** Which method is used to update the UI when state changes?
- A. build()
- B. setState()
- C. initState()
- D. dispose()

- **Đáp án:** **B. setState()**
- **Giải thích:** Trong `StatefulWidget`, khi giá trị biến trạng thái thay đổi, việc bọc thay đổi đó trong hàm `setState(() { ... })` sẽ báo hiệu cho Flutter framework lên lịch gọi lại phương thức `build()` để cập nhật UI.
- **Kiến thức thuộc về:** Flutter Core / StatefulWidget & State Lifecycle.

---

### **Câu 31**
**Câu hỏi:** Which Flutter package is commonly used for simple key-value storage?
- A. sqflite
- B. shared_preferences
- C. provider
- D. http

- **Đáp án:** **B. shared_preferences**
- **Giải thích:** Package `shared_preferences` bọc các API gốc của nền tảng (NSUserDefaults trên iOS, SharedPreferences trên Android) để đọc/ghi các dữ liệu nguyên thủy đơn giản dạng khóa - giá trị (key-value) như trạng thái login, cờ cài đặt.
- **Kiến thức thuộc về:** Data Persistence / Key-Value Storage (`shared_preferences`).

---

### **Câu 32**
**Câu hỏi:** Why should architecture be decided early?
- A. Avoid UI work
- B. Reduce refactoring cost
- C. Improve animations
- D. Change theme

- **Đáp án:** **B. Reduce refactoring cost**
- **Giải thích:** Việc thống nhất và lựa chọn kiến trúc phần mềm (như Clean Architecture, Layered Architecture, BLoC/MVVM) ngay từ đầu giúp cấu trúc code nhất quán, giảm thiểu rủi ro phải tái cấu trúc toàn diện (refactoring) tốn kém khi ứng dụng phát triển lớn hơn.
- **Kiến thức thuộc về:** Software Engineering & Mobile App Architecture.

---

### **Câu 33**
**Câu hỏi:** What is pagination used for?
- A. UI animation
- B. Handling large datasets efficiently
- C. Theme management
- D. Authentication

- **Đáp án:** **B. Handling large datasets efficiently**
- **Giải thích:** Phân trang (Pagination) là kỹ thuật chia nhỏ tập dữ liệu lớn thành từng trang/khối (pages/chunks) để tải và render dần (lazy loading / infinite scrolling), giúp tối ưu băng thông mạng, giảm tải bộ nhớ và cải thiện trải nghiệm người dùng.
- **Kiến thức thuộc về:** Networking & Data Management / API Pagination & Infinite Scrolling.

---

### **Câu 34**
**Câu hỏi:** Which widget helps avoid rebuilding unchanged UI parts?
- A. Container
- B. RepaintBoundary
- C. Column
- D. FutureBuilder

- **Đáp án:** **B. RepaintBoundary**
- **Giải thích:** `RepaintBoundary` tạo ra một `RenderRepaintBoundary` độc lập trong cây render, giúp cô lập vùng vẽ của widget con để khi widget khác repaint thì khu vực này không cần phải vẽ lại, tránh lãng phí GPU/CPU rendering.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Rendering & `RepaintBoundary`.

---

### **Câu 35**
**Câu hỏi:** Which widget is used to handle asynchronous API responses in UI?
- A. FutureBuilder
- B. ListView
- C. Provider
- D. Form

- **Đáp án:** **A. FutureBuilder**
- **Giải thích:** `FutureBuilder` là widget chuyên dùng để theo dõi một `Future` (như lời gọi API bất đồng bộ) và tự động xây dựng giao diện tương ứng với từng trạng thái: đang chờ (`ConnectionState.waiting`), gặp lỗi (`snapshot.hasError`), hoặc thành công (`snapshot.hasData`).
- **Kiến thức thuộc về:** Asynchronous UI Programming / `FutureBuilder` in Flutter.

---

### **Câu 36**
**Câu hỏi:** Which Dart feature helps organize code into reusable libraries?
- A. Widgets
- B. Packages and imports
- C. Hot reload
- D. Layout constraints

- **Đáp án:** **B. Packages and imports**
- **Giải thích:** Dart tổ chức và module hóa mã nguồn thông qua hệ thống các packages và thư viện, sử dụng câu lệnh `import` (và `export`) để tái sử dụng mã nguồn giữa các file và các dự án khác nhau.
- **Kiến thức thuộc về:** Dart Programming Fundamentals / Modularization, Packages & Imports.

---

### **Câu 37**
**Câu hỏi:** What is refresh token used for?
- A. UI refresh
- B. Extend session without re-login
- C. Theme update
- D. Navigation reset

- **Đáp án:** **B. Extend session without re-login**
- **Giải thích:** Refresh token là mã định danh có thời hạn dài, được dùng để gửi lên server yêu cầu cấp một Access token mới khi Access token cũ hết hạn mà người dùng không cần phải thực hiện đăng nhập lại từ đầu.
- **Kiến thức thuộc về:** Security & Authentication / OAuth 2.0 & JWT Token Management.

---

### **Câu 38**
**Câu hỏi:** What is rebuild scope optimization in Flutter?
- A. Reducing widget tree depth
- B. Limiting rebuild to affected widgets
- C. Caching API responses
- D. Using global state

- **Đáp án:** **B. Limiting rebuild to affected widgets**
- **Giải thích:** Tối ưu hóa phạm vi rebuild (Rebuild Scope Optimization) là kỹ thuật cấu trúc widget sao cho khi có sự thay đổi state, chỉ có những widget thực sự phụ thuộc vào dữ liệu đó bị rebuild thay vì rebuild toàn bộ màn hình hoặc widget cha cấp cao.
- **Kiến thức thuộc về:** Flutter Performance & State Management / Rebuild Scope Optimization.

---

### **Câu 39**
**Câu hỏi:** Why is BLoC suitable for large teams?
- A. Less code
- B. Standardized architecture
- C. Faster builds
- D. UI reuse

- **Đáp án:** **B. Standardized architecture**
- **Giải thích:** BLoC cung cấp một cấu trúc kiến trúc chuẩn hóa rõ ràng (phân tách Events, States, BLoC/Cubit, UI, Repositories). Quy ước chặt chẽ này giúp các thành viên trong đội ngũ lớn làm việc song song dễ dàng, đồng bộ phong cách code và dễ kiểm thử độc lập.
- **Kiến thức thuộc về:** State Management & Software Engineering / BLoC in Enterprise & Large Teams.

---

### **Câu 40**
**Câu hỏi:** Which widget reacts to async data from local storage?
- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Provider

- **Đáp án:** **A. FutureBuilder**
- **Giải thích:** Các thao tác đọc dữ liệu từ local storage (như SQLite, SharedPreferences) thường trả về một `Future`. Widget `FutureBuilder` nhận vào `Future` đó để hiển thị giao diện phù hợp với trạng thái loading và dữ liệu trả về.
- **Kiến thức thuộc về:** Local Storage & Asynchronous UI / `FutureBuilder`.

---

### **Câu 41**
**Câu hỏi:** What is a token in authentication systems?
- A. UI key
- B. Temporary access credential
- C. Database ID
- D. Theme value

- **Đáp án:** **B. Temporary access credential**
- **Giải thích:** Trong các hệ thống xác thực (như JWT, OAuth), token là chuỗi chứng chỉ truy cập tạm thời được cấp sau khi định danh thành công, cho phép client gửi kèm trong các request để chứng minh quyền truy cập tài nguyên.
- **Kiến thức thuộc về:** Mobile Security & Authentication / Token-Based Authentication.

---

### **Câu 42**
**Câu hỏi:** What does a Tween define?
- A. Animation speed
- B. Value range for animation
- C. UI layout
- D. State logic

- **Đáp án:** **B. Value range for animation**
- **Giải thích:** Trong hệ thống Animation của Flutter, `Tween` (viết tắt của in-between) định nghĩa một dải giá trị biến thiên tuyến tính từ giá trị bắt đầu (`begin`) đến giá trị kết thúc (`end`) (ví dụ: đổi màu từ đỏ sang xanh, hoặc biến đổi giá trị từ 0.0 đến 100.0).
- **Kiến thức thuộc về:** Flutter Animations / Explicit Animations & Tween.

---

### **Câu 43**
**Câu hỏi:** Which Dart feature allows defining reusable, type-safe components?
- A. Mixins
- B. Generics
- C. Futures
- D. Streams

- **Đáp án:** **B. Generics**
- **Giải thích:** `Generics` (Generic Programming với cú pháp kiểu tham số hóa `<T>`) cho phép tạo ra các class, interface, method dùng chung có thể hoạt động linh hoạt với nhiều kiểu dữ liệu khác nhau mà vẫn đảm bảo tính an toàn kiểu dữ liệu (Type Safety) ngay tại thời điểm biên dịch.
- **Kiến thức thuộc về:** Dart Language / Generics & Type System.

---

### **Câu 44**
**Câu hỏi:** Which widget animates between two widgets?
- A. AnimatedSwitcher
- B. AnimatedOpacity
- C. AnimatedAlign
- D. AnimatedSize

- **Đáp án:** **A. AnimatedSwitcher**
- **Giải thích:** `AnimatedSwitcher` là một Implicit Animation widget có khả năng tự động thực hiện hiệu ứng chuyển cảnh mềm mại (fade, scale...) giữa widget hiện tại và widget mới khi widget con (child) được thay thế (dựa trên Key của widget con).
- **Kiến thức thuộc về:** Flutter Animations / Implicit Animations (`AnimatedSwitcher`).

---

### **Câu 45**
**Câu hỏi:** Why should setState() be called sparingly?
- A. It increases app size
- B. It may trigger unnecessary rebuilds
- C. It blocks UI thread
- D. It causes memory leaks

- **Đáp án:** **B. It may trigger unnecessary rebuilds**
- **Giải thích:** Mỗi khi `setState()` được gọi, Flutter sẽ rebuild lại toàn bộ widget đó và các widget con của nó. Gọi `setState()` tùy tiện hoặc ở phạm vi quá rộng sẽ gây ra nhiều lần rebuild không cần thiết, làm giảm FPS và lãng phí tài nguyên CPU/GPU.
- **Kiến thức thuộc về:** Flutter Performance & State Management / `setState()` Best Practices.

---

### **Câu 46**
**Câu hỏi:** What is test isolation?
- A. Running all tests together
- B. Independence of test cases
- C. UI separation
- D. Mocking only

- **Đáp án:** **B. Independence of test cases**
- **Giải thích:** Tính cô lập trong kiểm thử (Test Isolation) là nguyên tắc cốt lõi đảm bảo mỗi ca kiểm thử (test case) phải chạy độc lập, tự khởi tạo và dọn dẹp môi trường riêng của mình, không phụ thuộc vào thứ tự chạy và không bị ảnh hưởng bởi kết quả của các test case khác.
- **Kiến thức thuộc về:** Software Testing Principles / Test Isolation & Independence.

---

### **Câu 47**
**Câu hỏi:** What does crossAxisAlignment control?
- A. Vertical alignment in Column
- B. Horizontal alignment in Column
- C. Child order
- D. Widget size

- **Đáp án:** **B. Horizontal alignment in Column**
- **Giải thích:** Trong widget `Column`, trục chính (`mainAxisAlignment`) là trục dọc (vertical), còn trục phụ vuông góc (`crossAxisAlignment`) là trục ngang (horizontal). Do đó `crossAxisAlignment` điều khiển cách căn chỉnh các widget con theo chiều ngang (Left/Right/Center/Stretch).
- **Kiến thức thuộc về:** Flutter UI Layouts / Flex Layout (`Column` & `Row` Alignment).

---

### **Câu 48**
**Câu hỏi:** Which tool is commonly used for version control?
- A. SVN
- B. Git
- C. FTP
- D. ZIP

- **Đáp án:** **B. Git**
- **Giải thích:** `Git` là hệ thống quản lý phiên bản phân tán (Distributed Version Control System) tiêu chuẩn và phổ biến nhất trong phát triển phần mềm hiện đại, hỗ trợ quản lý mã nguồn, phân nhánh (branching) và cộng tác nhóm.
- **Kiến thức thuộc về:** Software Engineering & Development Tools / Version Control (Git).
