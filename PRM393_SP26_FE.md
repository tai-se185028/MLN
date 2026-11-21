# ĐỀ TRẮC NGHIỆM PRM393 - SP26 - FE

---

### **Câu 1**
**Câu hỏi:** Why is clean architecture beneficial?
- A. Fewer files
- B. Easier maintenance and testing
- C. Better UI
- D. Faster builds

- **Đáp án:** **B. Easier maintenance and testing**
- **Giải thích:** Clean Architecture phân tách ứng dụng thành các lớp độc lập (Presentation, Domain, Data), giúp mã nguồn giảm bớt sự phụ thuộc chặt chẽ, dễ bảo trì, dễ mở rộng tính năng và rất thuận tiện để viết kiểm thử tự động (Unit Test / Mocking).
- **Kiến thức thuộc về:** Mobile Software Architecture / Clean Architecture Principles.

---

### **Câu 2**
**Câu hỏi:** What is Dart primarily designed for in the Flutter ecosystem?
- A. Database management
- B. User interface development
- C. General-purpose programming with UI focus
- D. Network security

- **Đáp án:** **C. General-purpose programming with UI focus**
- **Giải thích:** Dart là ngôn ngữ lập trình đa năng (general-purpose), nhưng được Google thiết kế và tối ưu hóa đặc biệt tập trung vào việc xây dựng giao diện người dùng nhanh chóng, mượt mà (hỗ trợ cả JIT cho Hot Reload và AOT cho Native compilation).
- **Kiến thức thuộc về:** Dart Fundamentals & Flutter Ecosystem.

---

### **Câu 3**
**Câu hỏi:** Why is secure authentication critical in mobile apps?
- A. UI quality
- B. Protect user data
- C. Reduce code
- D. Improve speed

- **Đáp án:** **B. Protect user data**
- **Giải thích:** Xác thực an toàn (Secure Authentication) là yêu cầu tối quan trọng để bảo vệ dữ liệu cá nhân, thông tin nhạy cảm của người dùng và ngăn chặn các truy cập trái phép vào tài nguyên hệ thống.
- **Kiến thức thuộc về:** Mobile App Security / Authentication & Authorization.

---

### **Câu 4**
**Câu hỏi:** Which HTTP method is typically used to retrieve data?
- A. POST
- B. PUT
- C. GET
- D. DELETE

- **Đáp án:** **C. GET**
- **Giải thích:** Trong giao thức HTTP và chuẩn RESTful API, phương thức `GET` được quy định dùng để yêu cầu và lấy dữ liệu từ server về client mà không làm thay đổi trạng thái của tài nguyên trên server.
- **Kiến thức thuộc về:** Networking & RESTful APIs / HTTP Methods.

---

### **Câu 5**
**Câu hỏi:** What happens if a non-nullable variable is not initialized in Dart?
- A. The app runs normally
- B. A runtime exception occurs
- C. A compile-time error occurs
- D. The value becomes null automatically

- **Đáp án:** **C. A compile-time error occurs**
- **Giải thích:** Với tính năng Sound Null Safety trong Dart, mọi biến non-nullable (không có dấu `?`) bắt buộc phải có giá trị khởi tạo trước khi được sử dụng. Nếu không khởi tạo, trình biên dịch sẽ báo lỗi ngay tại thời điểm biên dịch (Compile-time error).
- **Kiến thức thuộc về:** Dart Language / Sound Null Safety.

---

### **Câu 6**
**Câu hỏi:** Which command builds a release APK?
- A. flutter run
- B. flutter build apk
- C. flutter doctor
- D. flutter clean

- **Đáp án:** **B. flutter build apk**
- **Giải thích:** Lệnh `flutter build apk` (mặc định ở chế độ release) sẽ biên dịch toàn bộ mã nguồn Dart và tài nguyên thành file cài đặt APK tối ưu sẵn sàng để phát hành hoặc cài trực tiếp lên thiết bị Android.
- **Kiến thức thuộc về:** Flutter CLI Tools & Deployment / Android Release Build.

---

### **Câu 7**
**Câu hỏi:** Which widget allows overlapping of its child widgets?
- A. Column
- B. Row
- C. Stack
- D. Expanded

- **Đáp án:** **C. Stack**
- **Giải thích:** Widget `Stack` cho phép xếp chồng các widget con lên nhau theo trục Z (chiều sâu không gian), định vị vị trí các widget con thông qua widget `Positioned`.
- **Kiến thức thuộc về:** Flutter UI Layout / Stack & Positioned Widgets.

---

### **Câu 8**
**Câu hỏi:** Which platforms can Flutter applications target using a single codebase?
- A. Android only
- B. iOS only
- C. Android, iOS, web, and desktop
- D. Web servers only

- **Đáp án:** **C. Android, iOS, web, and desktop**
- **Giải thích:** Flutter là framework đa nền tảng thực sự, cho phép lập trình viên chỉ viết một cơ sở mã nguồn duy nhất (single codebase) và biên dịch ra ứng dụng chạy trên Android, iOS, Web, Windows, macOS, Linux.
- **Kiến thức thuộc về:** Flutter Overview / Multi-platform Architecture.

---

### **Câu 9**
**Câu hỏi:** What is the main risk of improper state management?
- A. UI inconsistency
- B. Longer compile time
- C. Package conflicts
- D. Build errors

- **Đáp án:** **A. UI inconsistency**
- **Giải thích:** Quản lý trạng thái không đúng cách dẫn đến rủi ro lớn nhất là giao diện hiển thị không đồng bộ với dữ liệu thực tế (UI Inconsistency / Stale State), dẫn đến các lỗi logic và trải nghiệm người dùng kém.
- **Kiến thức thuộc về:** State Management Principles / State Synchronization & Consistency.

---

### **Câu 10**
**Câu hỏi:** What does CurvedAnimation provide?
- A. Layout control
- B. Animation curve behavior
- C. State updates
- D. Navigation

- **Đáp án:** **B. Animation curve behavior**
- **Giải thích:** `CurvedAnimation` trong Flutter dùng để áp dụng một đường cong phi tuyến (Curves như `easeIn`, `easeInOut`, `bounceOut`...) vào một `AnimationController`, tạo ra các hiệu ứng chuyển động tự nhiên và sinh động hơn chuyển động tuyến tính thông thường.
- **Kiến thức thuộc về:** Flutter Animations / CurvedAnimation & Animation Curves.

---

### **Câu 11**
**Câu hỏi:** How can data be passed to a new screen?
- A. Using global variables
- B. Via constructor arguments
- C. Using ThemeData
- D. Using Scaffold

- **Đáp án:** **B. Via constructor arguments**
- **Giải thích:** Cách truyền dữ liệu cơ bản, an toàn và trực tiếp nhất giữa các màn hình trong Flutter là truyền qua các tham số của hàm khởi tạo (Constructor arguments) của Widget màn hình mới khi thực hiện `Navigator.push`.
- **Kiến thức thuộc về:** Flutter Navigation / Parameter Passing between Screens.

---

### **Câu 12**
**Câu hỏi:** What is the purpose of parsing JSON?
- A. Encrypt data
- B. Convert JSON into Dart objects
- C. Send requests
- D. Cache responses

- **Đáp án:** **B. Convert JSON into Dart objects**
- **Giải thích:** JSON Parsing (chuyển đổi chuỗi định dạng JSON nhận từ API thành các đối tượng Dart / Model Classes) giúp chương trình thao tác với dữ liệu có cấu trúc an toàn kiểu (type-safe) thay vì làm việc với các chuỗi thô.
- **Kiến thức thuộc về:** Data Serialization / JSON Parsing in Dart & Flutter.

---

### **Câu 13**
**Câu hỏi:** Which phase involves gathering requirements?
- A. Implementation
- B. Design
- C. Analysis
- D. Testing

- **Đáp án:** **C. Analysis**
- **Giải thích:** Trong quy trình phát triển phần mềm (SDLC), giai đoạn Phân tích yêu cầu (Requirements Analysis) có nhiệm vụ thu thập, phân tích và làm rõ các nhu cầu của khách hàng/người dùng trước khi bước vào giai đoạn thiết kế và lập trình.
- **Kiến thức thuộc về:** Software Engineering / SDLC (Software Development Life Cycle).

---

### **Câu 14**
**Câu hỏi:** Which Flutter tool helps debug network requests?
- A. DevTools
- B. Inspector
- C. Emulator
- D. Hot reload

- **Đáp án:** **A. DevTools**
- **Giải thích:** Flutter DevTools tích hợp Network View cho phép lập trình viên theo dõi chi tiết toàn bộ các yêu cầu HTTP/HTTPS, kiểm tra request headers, body, response data, mã trạng thái và thời gian phản hồi.
- **Kiến thức thuộc về:** Flutter Tooling / DevTools Network Profiling.

---

### **Câu 15**
**Câu hỏi:** Which Dart feature supports object-oriented programming?
- A. Widgets
- B. Classes and objects
- C. Hot reload
- D. Layout builders

- **Đáp án:** **B. Classes and objects**
- **Giải thích:** Dart là ngôn ngữ lập trình hướng đối tượng thuần túy; nền tảng cốt lõi của OOP trong Dart được thể hiện qua Khái niệm Lớp (Classes) và Đối tượng (Objects).
- **Kiến thức thuộc về:** Dart Language / Object-Oriented Programming (OOP).

---

### **Câu 16**
**Câu hỏi:** Which approach helps reduce unnecessary widget rebuilds?
- A. Using global variables
- B. Fine-grained state updates
- C. Hot restart
- D. Large widgets

- **Đáp án:** **B. Fine-grained state updates**
- **Giải thích:** Cập nhật state ở mức độ chi tiết và cục bộ (Fine-grained state updates, ví dụ sử dụng các builder cục bộ như `ValueListenableBuilder`, `BlocSelector`) giúp giới hạn việc build lại chỉ cho đúng widget cần thay đổi, tránh rebuild toàn bộ màn hình.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Rebuild Scope & Granular State.

---

### **Câu 17**
**Câu hỏi:** Which action best demonstrates Flutter's reactive UI model?
- A. Manually updating UI elements
- B. Rebuilding UI in response to state changes
- C. Editing layout XML
- D. Calling native APIs

- **Đáp án:** **B. Rebuilding UI in response to state changes**
- **Giải thích:** Mô hình Reactive UI (Declarative) của Flutter hoạt động dựa trên nguyên lý: Giao diện là một hàm phản ánh trạng thái ($UI = f(State)$). Khi State thay đổi, Flutter tự động kích hoạt quá trình rebuild lại UI tương ứng.
- **Kiến thức thuộc về:** Flutter Core Architecture / Declarative & Reactive UI Model.

---

### **Câu 18**
**Câu hỏi:** Why are const widgets recommended?
- A. They improve readability
- B. They reduce rebuild cost
- C. They add state
- D. They handle navigation

- **Đáp án:** **B. They reduce rebuild cost**
- **Giải thích:** Widget khai báo với từ khóa `const` được tạo một lần duy nhất tại compile-time và lưu vào bộ nhớ dùng chung. Khi widget cha rebuild, Flutter sẽ bỏ qua (short-circuit) việc rebuild các const widget con này, giúp tiết kiệm đáng kể chu kỳ CPU.
- **Kiến thức thuộc về:** Flutter Performance Optimization / `const` Constructor Optimization.

---

### **Câu 19**
**Câu hỏi:** Why should animations be disposed properly?
- A. Improve UI
- B. Prevent memory leaks
- C. Speed up builds
- D. Fix layout

- **Đáp án:** **B. Prevent memory leaks**
- **Giải thích:** `AnimationController` gắn liền với cơ chế `Ticker` lắng nghe các khung hình của hệ thống. Nếu không gọi phương thức `controller.dispose()` khi widget bị hủy, controller sẽ tiếp tục chạy ngầm, gây rò rỉ bộ nhớ (memory leaks) và tốn pin.
- **Kiến thức thuộc về:** Flutter Lifecycle / Resource Management & Animation Disposal.

---

### **Câu 20**
**Câu hỏi:** Which Flutter test focuses on UI components?
- A. Unit test
- B. Widget test
- C. Integration test
- D. Load test

- **Đáp án:** **B. Widget test**
- **Giải thích:** Widget Test (hay Component Test) tập trung kiểm tra độc lập từng widget/giao diện: cách widget render, hiển thị text/hình ảnh và phản hồi các tương tác người dùng (nhấn nút, vuốt, nhập chữ) trong môi trường test cô lập.
- **Kiến thức thuộc về:** Testing in Flutter / Widget Testing (`flutter_test`).

---

### **Câu 21**
**Câu hỏi:** Why should database operations be asynchronous?
- A. Simplify syntax
- B. Avoid blocking UI thread
- C. Reduce code
- D. Improve theme

- **Đáp án:** **B. Avoid blocking UI thread**
- **Giải thích:** Các thao tác truy xuất dữ liệu từ ổ đĩa (I/O) thường tốn thời gian. Chạy bất đồng bộ (Asynchronous với `Future`/`async-await`) giúp không chặn UI Thread (Main Isolate), giữ cho giao diện luôn mượt mà ở 60/120 FPS mà không bị đơ giật.
- **Kiến thức thuộc về:** Concurrency & Asynchronous Programming / Non-blocking UI Thread.

---

### **Câu 22**
**Câu hỏi:** Why is Chapter 13 considered optional (Plus)?
- A. It replaces core concepts
- B. Apps can work without deep optimization
- C. It manages navigation
- D. It handles authentication

- **Đáp án:** **B. Apps can work without deep optimization**
- **Giải thích:** Trong chương trình môn học PRM393, Chương 13 (Tối ưu hóa hiệu năng nâng cao & Profiling) được xếp vào phần mở rộng (Plus) vì các ứng dụng thông thường vẫn có thể hoạt động đầy đủ chức năng cơ bản mà không nhất thiết phải áp dụng các kỹ thuật tối ưu hóa quá chuyên sâu.
- **Kiến thức thuộc về:** PRM393 Course Curriculum / Mobile App Performance Optimization.

---

### **Câu 23**
**Câu hỏi:** Which widget applies a theme to an entire Flutter application?
- A. Scaffold
- B. Theme
- C. MaterialApp
- D. Container

- **Đáp án:** **C. MaterialApp**
- **Giải thích:** Widget gốc `MaterialApp` nhận thuộc tính `theme` và `darkTheme` để áp dụng cấu hình `ThemeData` (màu sắc, typography, kiểu widget...) cho toàn bộ ứng dụng.
- **Kiến thức thuộc về:** Flutter UI Design / Theming & `MaterialApp`.

---

### **Câu 24**
**Câu hỏi:** What is the purpose of SliverAppBar?
- A. Static app bar
- B. Scrollable flexible app bar
- C. Bottom navigation
- D. Drawer control

- **Đáp án:** **B. Scrollable flexible app bar**
- **Giải thích:** `SliverAppBar` là thanh tiêu đề ứng dụng linh hoạt có thể cuộn, co giãn (expand/collapse) mượt mà cùng danh sách khi cuộn bên trong `CustomScrollView`.
- **Kiến thức thuộc về:** Flutter UI / Slivers & `SliverAppBar`.

---

### **Câu 25**
**Câu hỏi:** Which widget is best used to add fixed empty space?
- A. Padding
- B. Expanded
- C. SizedBox
- D. Container

- **Đáp án:** **C. SizedBox**
- **Giải thích:** `SizedBox` là widget nhẹ và tối ưu nhất để tạo khoảng trống cố định (về chiều rộng hoặc chiều cao) giữa các widget con trong `Column` hoặc `Row`.
- **Kiến thức thuộc về:** Flutter UI Layout / Spacing & `SizedBox`.

---

### **Câu 26**
**Câu hỏi:** Which package supports BLoC architecture?
- A. provider
- B. flutter_bloc
- C. sqflite
- D. http

- **Đáp án:** **B. flutter_bloc**
- **Giải thích:** Package `flutter_bloc` cung cấp các công cụ và widget chuyên dụng (`BlocProvider`, `BlocBuilder`, `BlocListener`, `BlocConsumer`) để hiện thực hóa kiến trúc quản lý trạng thái BLoC và Cubit trong Flutter.
- **Kiến thức thuộc về:** State Management / `flutter_bloc` package.

---

### **Câu 27**
**Câu hỏi:** Which Flutter widget reacts to authentication state changes?
- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Form

- **Đáp án:** **B. StreamBuilder**
- **Giải thích:** Trạng thái xác thực đăng nhập thường được lắng nghe qua một luồng dữ liệu liên tục (`Stream`). `StreamBuilder` là widget chuyên dụng giúp tự động lắng nghe luồng này và render lại giao diện phù hợp (Login Screen hoặc Home Screen) mỗi khi có sự kiện Auth mới.
- **Kiến thức thuộc về:** Asynchronous UI Programming / `StreamBuilder` & Auth State Flow.

---

### **Câu 28**
**Câu hỏi:** What is technical debt?
- A. UI lag
- B. Future cost of poor design decisions
- C. Memory usage
- D. API limit

- **Đáp án:** **B. Future cost of poor design decisions**
- **Giải thích:** Nợ kỹ thuật (Technical Debt) là chi phí phát sinh trong tương lai (tốn thêm thời gian bảo trì, sửa lỗi, khó mở rộng) khi lập trình viên lựa chọn các giải pháp tạm bợ, thiết kế kém chất lượng hoặc bỏ qua kiến trúc chuẩn để kịp tiến độ ngắn hạn.
- **Kiến thức thuộc về:** Software Engineering / Software Quality & Technical Debt.

---

### **Câu 29**
**Câu hỏi:** What is implicit animation?
- A. Manual animation control
- B. Animation without controller
- C. API animation
- D. Navigation animation

- **Đáp án:** **B. Animation without controller**
- **Giải thích:** Implicit Animations (như `AnimatedContainer`, `AnimatedOpacity`, `AnimatedPadding`) là các widget hoạt ảnh tự động nội suy giữa các giá trị khi thuộc tính thay đổi mà lập trình viên không cần phải tự tạo và điều khiển `AnimationController`.
- **Kiến thức thuộc về:** Flutter Animations / Implicit Animations.

---

### **Câu 30**
**Câu hỏi:** Which Dart data structure is best suited for storing an ordered collection of items?
- A. Set
- B. Map
- C. List
- D. Queue

- **Đáp án:** **C. List**
- **Giải thích:** `List` trong Dart là một tập hợp các phần tử có thứ tự tuần tự (ordered collection), cho phép truy xuất các phần tử nhanh chóng qua chỉ số vị trí (index).
- **Kiến thức thuộc về:** Dart Fundamentals / Collections (`List`).

---

### **Câu 31**
**Câu hỏi:** Which Flutter concept supports reactive UI updates?
- A. Manual refresh
- B. Widget rebuilding
- C. Hot restart
- D. Native callbacks

- **Đáp án:** **B. Widget rebuilding**
- **Giải thích:** Trong mô hình Declarative/Reactive của Flutter, việc cập nhật lại giao diện khi có dữ liệu mới được thực hiện thông qua cơ chế Rebuild lại cây widget tương ứng.
- **Kiến thức thuộc về:** Flutter Fundamentals / Declarative & Reactive UI Rendering.

---

### **Câu 32**
**Câu hỏi:** Which type of test checks individual functions or classes?
- A. Widget test
- B. Integration test
- C. Unit test
- D. System test

- **Đáp án:** **C. Unit test**
- **Giải thích:** Unit Test (Kiểm thử đơn vị) tập trung kiểm tra tính đúng đắn của từng hàm, phương thức hoặc class riêng lẻ một cách độc lập và nhanh chóng.
- **Kiến thức thuộc về:** Software Testing / Unit Testing.

---

### **Câu 33**
**Câu hỏi:** What is the role of events in BLoC?
- A. Store UI
- B. Trigger state changes
- C. Render widgets
- D. Handle layout

- **Đáp án:** **B. Trigger state changes**
- **Giải thích:** Trong mô hình BLoC, Events đóng vai trò là đầu vào (Input) từ UI hoặc hệ thống, gửi đến BLoC để kích hoạt logic xử lý và tạo ra các States mới.
- **Kiến thức thuộc về:** State Management / BLoC Pattern (Events & States).

---

### **Câu 34**
**Câu hỏi:** What is the main purpose of hot reload in Flutter?
- A. Improve runtime performance
- B. Instantly reflect code changes in UI
- C. Publish apps faster
- D. Reduce memory usage

- **Đáp án:** **B. Instantly reflect code changes in UI**
- **Giải thích:** Hot Reload giúp tải mã nguồn mới vào máy ảo Dart đang chạy và hiển thị ngay lập tức các thay đổi lên màn hình mà vẫn bảo toàn trạng thái ứng dụng, giúp tăng tốc độ phát triển.
- **Kiến thức thuộc về:** Flutter Developer Tools / Hot Reload & Development Workflow.

---

### **Câu 35**
**Câu hỏi:** Why are forms important in mobile applications?
- A. UI decoration
- B. User data collection
- C. State management
- D. Navigation

- **Đáp án:** **B. User data collection**
- **Giải thích:** Biểu mẫu (Forms) là công cụ chính để thu thập dữ liệu nhập vào từ người dùng (như tài khoản, mật khẩu, phản hồi, biểu mẫu khảo sát) và hỗ trợ kiểm tra tính hợp lệ của dữ liệu (validation).
- **Kiến thức thuộc về:** Flutter UI & Forms / Form Handling & Data Collection.

---

### **Câu 36**
**Câu hỏi:** Which method retrieves data from SharedPreferences?
- A. get()
- B. read()
- C. fetch()
- D. load()

- **Đáp án:** **A. get()**
- **Giải thích:** Trong package `shared_preferences`, các phương thức dùng để đọc dữ liệu đã lưu đều sử dụng họ hàm `get()` (như `get()`, `getString()`, `getBool()`, `getInt()`...).
- **Kiến thức thuộc về:** Data Persistence / `shared_preferences` API.

---

### **Câu 37**
**Câu hỏi:** What is the main benefit of Flutter's widget-based architecture?
- A. Widgets are only used for layout design
- B. Widgets allow code reuse across platforms
- C. Widgets automatically manage databases
- D. Widgets replace backend services
 
- **Đáp án:** **B. Widgets allow code reuse across platforms**
- **Giải thích:** Kiến trúc xây dựng trên Widget của Flutter cho phép tái sử dụng tối đa mã nguồn giao diện trên nhiều nền tảng khác nhau mà vẫn đảm bảo tính nhất quán và hiệu năng cao.
- **Kiến thức thuộc về:** Flutter Architecture / Widget Reusability.

---

### **Câu 38**
**Câu hỏi:** Why are widgets lightweight in Flutter?
- A. They manage system resources
- B. They are immutable descriptions
- C. They store UI state
- D. They handle rendering directly

- **Đáp án:** **B. They are immutable descriptions**
- **Giải thích:** Widget trong Flutter chỉ là các đối tượng mô tả cấu hình bất biến (immutable descriptions). Chúng không trực tiếp vẽ hay nắm giữ tài nguyên hệ điều hành nặng nề, do đó việc khởi tạo và hủy widget rất nhẹ và nhanh.
- **Kiến thức thuộc về:** Flutter Architecture / Widget Tree & Immutability.

---

### **Câu 39**
**Câu hỏi:** Why should authentication state be centralized?
- A. Reduce UI code
- B. Ensure consistent access control
- C. Improve animations
- D. Simplify layout

- **Đáp án:** **B. Ensure consistent access control**
- **Giải thích:** Quản lý trạng thái xác thực tại một nơi tập trung (Centralized Auth State) giúp kiểm soát quyền truy cập đồng bộ và nhất quán trên toàn bộ ứng dụng, tránh tình trạng rò rỉ quyền hoặc không đồng nhất giữa các màn hình.
- **Kiến thức thuộc về:** Mobile App Security & State Management / Centralized Authentication.

---

### **Câu 40**
**Câu hỏi:** Which widget can hide user input text when configured for password entry?
- A. TextField
- B. ObscureText
- C. SecureInput
- D. PasswordField

- **Đáp án:** **A. TextField**
- **Giải thích:** `TextField` (hoặc `TextFormField`) khi được cấu hình thuộc tính `obscureText: true` sẽ tự động ẩn các ký tự người dùng nhập vào thành dấu chấm tròn để bảo mật mật khẩu.
- **Kiến thức thuộc về:** Flutter UI Components / Form Inputs (`TextField` & `obscureText`).

---

### **Câu 41**
**Câu hỏi:** What is Flutter primarily used for?
- A. Designing databases for mobile apps
- B. Creating native applications from a single codebase
- C. Developing server-side applications only
- D. Building operating systems for mobile devices

- **Đáp án:** **B. Creating native applications from a single codebase**
- **Giải thích:** Flutter là UI toolkit của Google chuyên dùng để xây dựng các ứng dụng native đa nền tảng (Mobile, Web, Desktop) từ một cơ sở mã nguồn duy nhất.
- **Kiến thức thuộc về:** Flutter Overview & Platform Capabilities.

---

### **Câu 42**
**Câu hỏi:** Which method resets all form fields?
- A. clear()
- B. reset()
- C. dispose()
- D. remove()

- **Đáp án:** **B. reset()**
- **Giải thích:** Phương thức `reset()` của `FormState` (gọi thông qua `_formKey.currentState?.reset()`) dùng để khôi phục toàn bộ các trường nhập liệu trong Form về lại giá trị ban đầu và xóa bỏ các thông báo lỗi kiểm tra.
- **Kiến thức thuộc về:** Flutter Forms / FormState Methods (`reset`).

---

### **Câu 43**
**Câu hỏi:** Which Dart keyword is used to define a constant value at compile time?
- A. final
- B. static
- C. const
- D. var

- **Đáp án:** **C. const**
- **Giải thích:** Từ khóa `const` trong Dart dùng để định nghĩa các hằng số có giá trị cố định được xác định ngay tại thời điểm biên dịch (compile-time constant).
- **Kiến thức thuộc về:** Dart Fundamentals / Variables & Constants (`const`).

---

### **Câu 44**
**Câu hỏi:** What happens after successful login?
- A. App closes
- B. User session starts
- C. Theme changes
- D. Navigation resets

- **Đáp án:** **B. User session starts**
- **Giải thích:** Sau khi xác thực đăng nhập thành công, hệ thống sẽ khởi tạo phiên làm việc của người dùng (User session starts), lưu token và cho phép người dùng truy cập các tính năng được bảo vệ.
- **Kiến thức thuộc về:** Authentication & Session Management.

---

### **Câu 45**
**Câu hỏi:** Which step is required before running a Flutter app for the first time?
- A. Publishing the app
- B. Setting up the Flutter SDK
- C. Configuring a database
- D. Writing backend APIs

- **Đáp án:** **B. Setting up the Flutter SDK**
- **Giải thích:** Để có thể biên dịch và chạy một ứng dụng Flutter lần đầu tiên, lập trình viên bắt buộc phải cài đặt và cấu hình Flutter SDK trên máy tính.
- **Kiến thức thuộc về:** Flutter Environment Setup / SDK Installation.

---

### **Câu 46**
**Câu hỏi:** Which widget reacts to async data from local storage?
- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Provider

- **Đáp án:** **A. FutureBuilder**
- **Giải thích:** Việc truy xuất dữ liệu từ bộ nhớ cục bộ (như SQLite, SharedPreferences) là các thao tác bất đồng bộ trả về `Future`. `FutureBuilder` là widget được thiết kế để lắng nghe `Future` này và dựng UI tương ứng với trạng thái dữ liệu.
- **Kiến thức thuộc về:** Asynchronous UI & Data Storage / `FutureBuilder`.

---

### **Câu 47**
**Câu hỏi:** What does golden testing verify?
- A. API responses
- B. UI appearance consistency
- C. Database state
- D. Authentication

- **Đáp án:** **B. UI appearance consistency**
- **Giải thích:** Golden Test (kiểm thử giao diện với hình ảnh mẫu chuẩn) kiểm tra tính nhất quán trực quan của giao diện bằng cách so sánh pixel-by-pixel giữa widget được render và hình ảnh mẫu (golden file) để phát hiện các lỗi vỡ giao diện.
- **Kiến thức thuộc về:** Flutter Testing / Golden Image Testing.

---

### **Câu 48**
**Câu hỏi:** Why should state be kept as local as possible?
- A. Better animations
- B. Reduce unnecessary rebuilds
- C. Simplify UI
- D. Improve navigation

- **Đáp án:** **B. Reduce unnecessary rebuilds**
- **Giải thích:** Giữ state ở phạm vi cục bộ gần nhất với widget cần nó giúp hạn chế phạm vi lan truyền việc rebuild, ngăn không cho các widget cha hoặc các widget không liên quan phải render lại lãng phí tài nguyên.
- **Kiến thức thuộc về:** State Management Principles / Local State vs Global State.

---

### **Câu 49**
**Câu hỏi:** What is the benefit of composing widgets in Flutter?
- A. Faster compilation
- B. Better code reuse and UI consistency
- C. Reduced memory usage
- D. Automatic navigation

- **Đáp án:** **B. Better code reuse and UI consistency**
- **Giải thích:** Nguyên lý Composition (kết hợp các widget nhỏ đơn nhiệm thành các widget lớn hơn) giúp tăng khả năng tái sử dụng mã nguồn và đảm bảo sự nhất quán trong thiết kế giao diện ứng dụng.
- **Kiến thức thuộc về:** Flutter UI Architecture / Widget Composition.

---

### **Câu 50**
**Câu hỏi:** Which status code indicates server error?
- A. 200
- B. 301
- C. 404
- D. 500

- **Đáp án:** **D. 500**
- **Giải thích:** Mã trạng thái HTTP trong dải 5xx (như 500 Internal Server Error) chỉ ra rằng yêu cầu gửi lên hợp lệ nhưng máy chủ đã gặp lỗi nội bộ khi xử lý yêu cầu đó.
- **Kiến thức thuộc về:** Networking Protocols / HTTP Status Codes.
