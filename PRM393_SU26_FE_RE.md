# ĐỀ TRẮC NGHIỆM PRM393 - SU26 - FE - RE

---

### **Câu 1**
**Câu hỏi:** What does a Dart class primarily represent?
- A. A UI widget only
- B. A blueprint for creating objects
- C. A database table
- D. A network request

- **Đáp án:** **B. A blueprint for creating objects**
- **Giải thích chi tiết:**
  - Trong lập trình hướng đối tượng (OOP) và ngôn ngữ Dart, **Class (Lớp)** là bản thiết kế/khuôn mẫu (blueprint) định nghĩa các thuộc tính (fields) và hành vi (methods). Từ bản thiết kế này, các đối tượng cụ thể (objects/instances) được tạo ra trong bộ nhớ để thực thi chương trình.
  - Các lựa chọn khác: Widget là các class chuyên biệt trong Flutter để tạo giao diện; Database table thuộc về tầng dữ liệu; Network request thuộc về tầng networking.
- **Kiến thức thuộc về:** Dart OOP Fundamentals / Classes & Objects.

---

### **Câu 2**
**Câu hỏi:** What type of data is SharedPreferences best suited for?
- A. Large datasets
- B. Simple primitive values
- C. Images
- D. Complex objects

- **Đáp án:** **B. Simple primitive values**
- **Giải thích chi tiết:**
  - `SharedPreferences` bọc các API lưu trữ nhẹ của hệ điều hành (`NSUserDefaults` trên iOS, `SharedPreferences` trên Android), được thiết kế chuyên biệt để lưu trữ các giá trị nguyên thủy đơn giản dạng khóa - giá trị (Key-Value) như `int`, `double`, `bool`, `String`, `List<String>` (ví dụ: cài đặt chế độ Dark mode, ngôn ngữ, cờ onboarding, token).
  - Đối với tập dữ liệu lớn (Large datasets) hoặc quan hệ phức tạp, lập trình viên nên dùng SQLite (`sqflite`) hoặc Hive / Isar; đối với hình ảnh nên lưu file trên bộ nhớ đĩa (`path_provider`).
- **Kiến thức thuộc về:** Local Data Storage / Key-Value Persistence with `shared_preferences`.

---

### **Câu 3**
**Câu hỏi:** What is the main purpose of app architecture?
- A. UI design
- B. Organize code structure
- C. Improve animations
- D. Handle API

- **Đáp án:** **B. Organize code structure**
- **Giải thích chi tiết:**
  - Mục đích cốt lõi của Kiến trúc ứng dụng (App Architecture - như Clean Architecture, MVVM, BLoC Pattern) là tổ chức và chuẩn hóa cấu trúc mã nguồn (Organize code structure).
  - Kiến trúc giúp phân tách rõ ràng trách nhiệm giữa các tầng (Separation of Concerns), giảm sự phụ thuộc chồng chéo (Loose Coupling), giúp dự án dễ bảo trì, dễ mở rộng quy mô khi nhiều lập trình viên cùng làm việc và thuận tiện cho việc kiểm thử tự động.
- **Kiến thức thuộc về:** Software Engineering & Architecture / Code Organization & Design Patterns.

---

### **Câu 4**
**Câu hỏi:** Which component is required to run and test Flutter applications on a local machine?
- A. A cloud hosting service
- B. A physical server
- C. An emulator or physical device
- D. A database management system

- **Đáp án:** **C. An emulator or physical device**
- **Giải thích chi tiết:**
  - Để có thể biên dịch, chạy thử và kiểm thử trực quan ứng dụng Flutter trên máy tính cá nhân, lập trình viên bắt buộc phải có môi trường đích để ứng dụng khởi chạy: đó có thể là máy ảo phần mềm (**Emulator** trên Android Studio / **Simulator** trên Xcode) hoặc kết nối trực tiếp với thiết bị thật (**Physical device**) qua cáp USB / Wi-Fi.
- **Kiến thức thuộc về:** Flutter Development Environment / Emulators & Device Testing.

---

### **Câu 5**
**Câu hỏi:** What does REST stand for?
- A. Remote State Transfer
- B. Representational State Transfer
- C. Reactive Service Transport
- D. Request State Transfer

- **Đáp án:** **B. Representational State Transfer**
- **Giải thích chi tiết:**
  - **REST** là viết tắt của **Representational State Transfer** (Chuyển giao trạng thái đại diện) – một kiểu kiến trúc phần mềm chuẩn mực được Roy Fielding định nghĩa, sử dụng giao thức HTTP không trạng thái (stateless) để truyền tải và thao tác với các tài nguyên định danh qua URL/URI.
- **Kiến thức thuộc về:** Networking & Web Services / REST API Fundamentals.

---

### **Câu 6**
**Câu hỏi:** What is pagination used for?
- A. UI animation
- B. Handling large datasets efficiently
- C. Theme management
- D. Authentication

- **Đáp án:** **B. Handling large datasets efficiently**
- **Giải thích chi tiết:**
  - Phân trang (Pagination) là kỹ thuật chia nhỏ tập dữ liệu khổng lồ thành nhiều trang/khối dữ liệu nhỏ (chunks) để tải dần theo nhu cầu (Lazy Loading / Infinite Scroll).
  - Kỹ thuật này giúp tối ưu hóa hiệu quả sử dụng băng thông mạng, giảm tải bộ nhớ RAM trên thiết bị di động, và rút ngắn thời gian phản hồi ban đầu của ứng dụng.
- **Kiến thức thuộc về:** Networking & Data Management / API Pagination & Infinite Scrolling.

---

### **Câu 7**
**Câu hỏi:** What does Navigator.pop() do?
- A. Open a new screen
- B. Close current screen
- C. Restart app
- D. Clear stack

- **Đáp án:** **B. Close current screen**
- **Giải thích chi tiết:**
  - Hệ thống điều hướng màn hình trong Flutter hoạt động theo cơ chế ngăn xếp (LIFO Route Stack). Phương thức `Navigator.pop(context)` sẽ gỡ bỏ (pop) route/màn hình đang nằm trên cùng của stack, từ đó đóng màn hình hiện tại và quay trở về màn hình liền kề trước đó.
  - `Navigator.push()` dùng để mở màn hình mới; `Navigator.popUntil()` hoặc `pushNamedAndRemoveUntil()` dùng để xóa stack.
- **Kiến thức thuộc về:** Flutter Navigation & Routing / Route Stack (`Navigator.pop`).

---

### **Câu 8**
**Câu hỏi:** What is rebuild scope optimization in Flutter?
- A. Reducing widget tree depth
- B. Limiting rebuild to affected widgets
- C. Caching API responses
- D. Using global state

- **Đáp án:** **B. Limiting rebuild to affected widgets**
- **Giải thích chi tiết:**
  - Tối ưu hóa phạm vi rebuild (Rebuild Scope Optimization) là kỹ thuật thiết kế và cấu trúc widget sao cho khi có sự thay đổi state, chỉ có những widget thực sự phụ thuộc vào state đó bị gọi lại hàm `build()`.
  - Việc này ngăn cản hiện tượng rebuild lan truyền lên widget cha hoặc toàn bộ màn hình, giúp tiết kiệm CPU và duy trì tốc độ khung hình 60/120 FPS mượt mà.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Rebuild Scope.

---

### **Câu 9**
**Câu hỏi:** Which pattern separates storage logic from UI?
- A. MVC
- B. Repository pattern
- C. Singleton
- D. Factory

- **Đáp án:** **B. Repository pattern**
- **Giải thích chi tiết:**
  - **Repository Pattern** đóng vai trò là một tầng trung gian trừu tượng hóa việc truy xuất dữ liệu nằm giữa tầng nghiệp vụ/UI và các nguồn dữ liệu cụ thể (Remote API, Local SQLite Database, Cache).
  - Tầng UI chỉ cần yêu cầu dữ liệu từ Repository mà không cần quan tâm dữ liệu được lấy từ mạng hay cơ sở dữ liệu cục bộ, giúp code sạch, dễ thay đổi nguồn lưu trữ và dễ mock khi viết test.
- **Kiến thức thuộc về:** Software Design Patterns / Repository Pattern & Data Layer.

---

### **Câu 10**
**Câu hỏi:** What is the purpose of building a release version of a Flutter app?
- A. Debug code
- B. Prepare app for distribution
- C. Test UI
- D. Change theme

- **Đáp án:** **B. Prepare app for distribution**
- **Giải thích chi tiết:**
  - Bản build Release (`flutter build apk --release`, `flutter build appbundle`, `flutter build ipa`) được tối ưu hóa tối đa: mã nguồn Dart được biên dịch Ahead-Of-Time (AOT) sang mã máy nhị phân thuần, loại bỏ toàn bộ mã debug/profiling, áp dụng tree-shaking và code shrinking.
  - Mục đích là để chuẩn bị ứng dụng có kích thước nhỏ nhất, hiệu năng cao nhất sẵn sàng xuất bản và phân phối tới người dùng cuối qua Google Play hoặc App Store.
- **Kiến thức thuộc về:** App Deployment & Release / Production Build & Distribution.

---

### **Câu 11**
**Câu hỏi:** Why should navigation logic be well-structured?
- A. Reduce UI size
- B. Improve maintainability
- C. Increase speed
- D. Avoid widgets

- **Đáp án:** **B. Improve maintainability**
- **Giải thích chi tiết:**
  - Việc tổ chức logic điều hướng một cách bài bản và có cấu trúc (sử dụng Named Routes, AutoRoute, GoRouter hoặc Navigation 2.0 Router Delegate) giúp mã nguồn dễ bảo trì, dễ quản lý các luồng điều hướng phức tạp (Deep linking, Authentication guards, Nested navigation) và tránh việc viết code chuyển màn hình rải rác khó kiểm soát.
- **Kiến thức thuộc về:** Flutter Architecture / Routing & Navigation Design.

---

### **Câu 12**
**Câu hỏi:** Why is logout functionality important?
- A. Free memory
- B. End user session securely
- C. Improve UI
- D. Change theme

- **Đáp án:** **B. End user session securely**
- **Giải thích chi tiết:**
  - Chức năng Đăng xuất (Logout) có vai trò bảo mật thiết yếu: kết thúc phiên làm việc của người dùng một cách an toàn bằng cách hủy token xác thực (cả ở client và thông báo thu hồi token trên server), xóa dữ liệu nhạy cảm lưu tạm trong cache/ bộ nhớ, ngăn chặn người khác tiếp tục sử dụng ứng dụng khi cầm vào thiết bị.
- **Kiến thức thuộc về:** Mobile App Security / Session Management & Authentication.

---

### **Câu 13**
**Câu hỏi:** Which widget animates between two widgets?
- A. AnimatedSwitcher
- B. AnimatedOpacity
- C. AnimatedAlign
- D. AnimatedSize

- **Đáp án:** **A. AnimatedSwitcher**
- **Giải thích chi tiết:**
  - `AnimatedSwitcher` là widget chuyên dùng để tạo hiệu ứng chuyển tiếp (transition) mượt mà (mặc định là FadeTransition) giữa widget con cũ và widget con mới khi giá trị Key hoặc bản thân widget con bị thay đổi.
- **Kiến thức thuộc về:** Flutter Animations / Implicit Animations (`AnimatedSwitcher`).

---

### **Câu 14**
**Câu hỏi:** Which method is used to update the UI when state changes?
- A. build()
- B. setState()
- C. initState()
- D. dispose()

- **Đáp án:** **B. setState()**
- **Giải thích chi tiết:**
  - Trong `StatefulWidget`, khi biến trạng thái nội bộ thay đổi, lập trình viên gọi `setState(() { ... })` để thông báo cho framework biết state đã thay đổi và kích hoạt framework gọi lại phương thức `build()` để vẽ lại giao diện.
- **Kiến thức thuộc về:** Flutter Fundamentals / StatefulWidget Lifecycle & `setState()`.

---

### **Câu 15**
**Câu hỏi:** Which programming language is used to develop Flutter applications?
- A. Kotlin
- B. Swift
- C. Dart
- D. JavaScript

- **Đáp án:** **C. Dart**
- **Giải thích chi tiết:**
  - Toàn bộ ứng dụng Flutter và bản thân framework Flutter được lập trình bằng ngôn ngữ **Dart** – ngôn ngữ hướng đối tượng hiện đại do Google phát triển.
- **Kiến thức thuộc về:** Flutter Overview / Dart Programming Language.

---

### **Câu 16**
**Câu hỏi:** Why is the widget tree considered immutable?
- A. Widgets cannot be removed
- B. Widgets are recreated instead of modified
- C. Widgets are stored permanently
- D. Widgets cannot contain data

- **Đáp án:** **B. Widgets are recreated instead of modified**
- **Giải thích chi tiết:**
  - Cây Widget trong Flutter mang tính chất bất biến (Immutable): tất cả các trường (fields) của Widget đều là `final`.
  - Khi có sự thay đổi giao diện hoặc trạng thái, Flutter không chỉnh sửa trực tiếp các thuộc tính của widget cũ mà tạo ra các đối tượng widget mới (recreated) để thay thế bản mô tả cũ. Tầng `Element` và `RenderObject` bên dưới sẽ so sánh và tái sử dụng các node giao diện render nặng nhằm tối ưu hiệu năng.
- **Kiến thức thuộc về:** Flutter Architecture / Widget Tree & Immutability.

---

### **Câu 17**
**Câu hỏi:** Why are const widgets recommended?
- A. They improve readability
- B. They reduce rebuild cost
- C. They add state
- D. They handle navigation

- **Đáp án:** **B. They reduce rebuild cost**
- **Giải thích chi tiết:**
  - Các widget được khởi tạo với từ khóa `const` (Compile-time Constants) sẽ được lưu vào bộ nhớ dùng chung. Khi cây widget cha rebuild, Flutter sẽ kiểm tra và nhận thấy đối tượng `const` không thay đổi nên bỏ qua việc rebuild lại nhánh widget con đó, giúp giảm tải chi phí xử lý và tối ưu CPU.
- **Kiến thức thuộc về:** Flutter Performance / `const` Constructor Optimization.

---

### **Câu 18**
**Câu hỏi:** Which feature of Dart helps prevent null reference errors at compile time?
- A. Dynamic typing
- B. Hot reload
- C. Null safety
- D. Asynchronous execution

- **Đáp án:** **C. Null safety**
- **Giải thích chi tiết:**
  - Tính năng **Sound Null Safety** trong Dart phân biệt rõ ràng giữa kiểu dữ liệu không thể null (`int`, `String`) và kiểu dữ liệu có thể null (`int?`, `String?`).
  - Trình biên dịch sẽ phân tích luồng code tĩnh và bắt buộc xử lý trường hợp null ngay tại thời điểm biên dịch (Compile time), triệt tiêu hoàn toàn lỗi kinh điển "Null Pointer Exception" (hay "NoSuchMethodError on null") khi ứng dụng chạy.
- **Kiến thức thuộc về:** Dart Language / Sound Null Safety System.

---

### **Câu 19**
**Câu hỏi:** When should you prefer Provider over setState()?
- A. For simple UI updates
- B. For global or shared state
- C. For animations
- D. For navigation

- **Đáp án:** **B. For global or shared state**
- **Giải thích chi tiết:**
  - `setState()` chỉ phù hợp cho trạng thái cục bộ (local/ephemeral state) gói gọn bên trong một widget duy nhất.
  - Khi trạng thái cần được chia sẻ giữa nhiều màn hình hoặc nhiều widget nằm ở các nhánh khác nhau trên cây widget (Global / App-wide state như thông tin đăng nhập người dùng, giỏ hàng, cài đặt ứng dụng), việc sử dụng `Provider` (hoặc BLoC/Riverpod) là lựa chọn tối ưu để quản lý và chia sẻ dữ liệu dễ dàng.
- **Kiến thức thuộc về:** State Management Strategies / Provider vs `setState()`.

---

### **Câu 20**
**Câu hỏi:** What advantage does a single codebase provide in Flutter development?
- A. Higher memory usage
- B. Simpler UI customization
- C. Reduced development and maintenance effort
- D. Automatic database synchronization

- **Đáp án:** **C. Reduced development and maintenance effort**
- **Giải thích chi tiết:**
  - Việc duy trì một codebase duy nhất cho nhiều nền tảng (iOS, Android, Web, Desktop) giúp đội ngũ phát triển không phải viết và duy trì 2-3 codebase riêng biệt bằng nhiều ngôn ngữ khác nhau (Swift, Kotlin, JS), từ đó giảm thiểu đáng kể thời gian phát triển, chi phí nhân sự và công sức bảo trì/sửa lỗi.
- **Kiến thức thuộc về:** Mobile Development Concepts / Cross-Platform Advantages.

---

### **Câu 21**
**Câu hỏi:** Which widget is commonly used as the root of a Flutter app?
- A. Scaffold
- B. MaterialApp
- C. Container
- D. Column

- **Đáp án:** **B. MaterialApp**
- **Giải thích chi tiết:**
  - `MaterialApp` (hoặc `CupertinoApp`) thường được đặt làm widget gốc (Root Widget) của toàn bộ ứng dụng Flutter. Nó khởi tạo các dịch vụ nền tảng cần thiết như hệ thống định tuyến (Navigator), Theme, Localization, và thiết lập các quy chuẩn Material Design.
  - `Scaffold` được dùng làm khung bố cục chính cho từng màn hình riêng lẻ bên trong `MaterialApp`.
- **Kiến thức thuộc về:** Flutter Core / App Root & `MaterialApp`.

---

### **Câu 22**
**Câu hỏi:** Why should setState() be called sparingly?
- A. It increases app size
- B. It may trigger unnecessary rebuilds
- C. It blocks UI thread
- D. It causes memory leaks

- **Đáp án:** **B. It may trigger unnecessary rebuilds**
- **Giải thích chi tiết:**
  - Mỗi khi `setState()` được gọi, Flutter sẽ đánh dấu dirty và rebuild lại toàn bộ widget đó cùng toàn bộ cây widget con bên trong hàm `build()`. Gọi `setState()` tùy tiện ở phạm vi quá lớn hoặc với tần suất cao sẽ gây lãng phí chu kỳ vẽ của CPU/GPU, gây tụt frame và giật lag giao diện.
- **Kiến thức thuộc về:** Performance Optimization / `setState()` Best Practices.

---

### **Câu 23**
**Câu hỏi:** What triggers a rebuild of a widget?
- A. Navigation only
- B. Calling setState()
- C. Restarting the IDE
- D. Changing the SDK

- **Đáp án:** **B. Calling setState()**
- **Giải thích chi tiết:**
  - Hành động gọi phương thức `setState()` trong `StatefulWidget` là cơ chế lập trình trực tiếp kích hoạt framework lên lịch gọi lại phương thức `build()` để tái tạo lại cây widget con.
- **Kiến thức thuộc về:** Flutter Fundamentals / Widget Lifecycle & Rebuild Triggers.

---

### **Câu 24**
**Câu hỏi:** What does BLoC stand for?
- A. Business Logic Component
- B. Backend Logic Controller
- C. Build Logic Component
- D. Basic Logic Controller

- **Đáp án:** **A. Business Logic Component**
- **Giải thích chi tiết:**
  - **BLoC** là viết tắt của **Business Logic Component** – kiến trúc quản lý trạng thái do các kỹ sư của Google giới thiệu tại sự kiện DartConf 2018, giúp tách rời hoàn toàn tầng giao diện (Presentation) khỏi tầng xử lý nghiệp vụ (Business Logic) thông qua Reactive Streams.
- **Kiến thức thuộc về:** State Management / BLoC Architecture Pattern.

---

### **Câu 25**
**Câu hỏi:** Which widget can hide user input text when configured for password entry?
- A. TextField
- B. ObscureText
- C. SecureInput
- D. PasswordField

- **Đáp án:** **A. TextField**
- **Giải thích chi tiết:**
  - Trong Flutter, widget `TextField` (hoặc `TextFormField`) khi được thiết lập thuộc tính `obscureText: true` sẽ tự động che giấu các ký tự người dùng gõ vào và thay thế bằng các ký tự ẩn (như dấu chấm tròn `•••`) để phục vụ việc nhập mật khẩu an toàn.
- **Kiến thức thuộc về:** Flutter UI Components / Form Inputs (`TextField` & `obscureText`).

---

### **Câu 26**
**Câu hỏi:** Which sliver is commonly used to display a scrolling list?
- A. SliverGrid
- B. SliverList
- C. SliverAppBar
- D. SliverFillRemaining

- **Đáp án:** **B. SliverList**
- **Giải thích chi tiết:**
  - `SliverList` là thành phần sliver chuyên dùng để hiển thị một danh sách cuộn các widget con theo một chiều dọc tuyến tính bên trong `CustomScrollView` (tương đương với `ListView` nhưng hoạt động theo cơ chế sliver hiệu năng cao).
  - `SliverGrid` dùng để hiển thị dạng lưới 2 chiều; `SliverAppBar` là thanh appbar co giãn.
- **Kiến thức thuộc về:** Flutter UI / Slivers (`SliverList`).

---

### **Câu 27**
**Câu hỏi:** What happens if form validation fails?
- A. Form submits
- B. Error messages are shown
- C. App crashes
- D. Data is saved

- **Đáp án:** **B. Error messages are shown**
- **Giải thích chi tiết:**
  - Khi gọi `_formKey.currentState!.validate()`, nếu có bất kỳ trường `TextFormField` nào không thỏa mãn quy tắc kiểm tra (validator trả về chuỗi thông báo lỗi thay vì `null`), form sẽ không cho phép submit và tự động hiển thị các dòng thông báo lỗi (Error messages) màu đỏ ngay bên dưới các ô nhập liệu tương ứng.
- **Kiến thức thuộc về:** Flutter Forms / Validation Flow.

---

### **Câu 28**
**Câu hỏi:** Which HTTP method is typically used to retrieve data?
- A. POST
- B. PUT
- C. GET
- D. DELETE

- **Đáp án:** **C. GET**
- **Giải thích chi tiết:**
  - Phương thức HTTP `GET` được quy định theo tiêu chuẩn RESTful API dùng để yêu cầu và nhận dữ liệu từ tài nguyên máy chủ mà không làm thay đổi trạng thái hay tạo mới dữ liệu trên máy chủ.
- **Kiến thức thuộc về:** Networking & REST APIs / HTTP Methods.

---

### **Câu 29**
**Câu hỏi:** Why should authentication state be centralized?
- A. Reduce UI code
- B. Ensure consistent access control
- C. Improve animations
- D. Simplify layout

- **Đáp án:** **B. Ensure consistent access control**
- **Giải thích chi tiết:**
  - Quản lý trạng thái xác thực tại một nơi tập trung (Centralized Authentication State) giúp toàn bộ các màn hình, các luồng điều hướng và các HTTP Interceptors đều nắm bắt được trạng thái đăng nhập thống nhất, đảm bảo việc phân quyền và kiểm soát truy cập (Access Control) diễn ra đồng bộ, an toàn và không bị sai lệch.
- **Kiến thức thuộc về:** Mobile Security & Architecture / Centralized Auth State.

---

### **Câu 30**
**Câu hỏi:** Which Dart keyword is used to define a constant value at compile time?
- A. final
- B. static
- C. const
- D. var

- **Đáp án:** **C. const**
- **Giải thích chi tiết:**
  - Từ khóa `const` trong Dart dùng để tạo ra hằng số bất biến tại thời điểm biên dịch (Compile-time constant). Giá trị của biến `const` bắt buộc phải được biết trước khi chương trình thực thi.
- **Kiến thức thuộc về:** Dart Fundamentals / Variables & Constants (`const`).

---

### **Câu 31**
**Câu hỏi:** Which status code indicates resource not found?
- A. 200
- B. 301
- C. 404
- D. 500

- **Đáp án:** **C. 404**
- **Giải thích chi tiết:**
  - Mã trạng thái HTTP **404 Not Found** thuộc nhóm lỗi client `4xx`, biểu thị rằng máy chủ không thể tìm thấy tài nguyên tương ứng với URL/URI được yêu cầu.
  - 200: OK; 301: Moved Permanently; 500: Internal Server Error.
- **Kiến thức thuộc về:** Networking Protocols / HTTP Status Codes.

---

### **Câu 32**
**Câu hỏi:** What represents the output of a BLoC?
- A. Events
- B. Widgets
- C. States
- D. Controllers

- **Đáp án:** **C. States**
- **Giải thích chi tiết:**
  - Trong luồng xử lý của kiến trúc BLoC:
    - **Input (Đầu vào):** Là các `Events` do người dùng hoặc hệ thống gửi tới.
    - **Output (Đầu ra):** Là các `States` mới được BLoC phát ra (yield/emit) để UI lắng nghe và cập nhật hiển thị.
- **Kiến thức thuộc về:** State Management / BLoC Pattern Architecture.

---

### **Câu 33**
**Câu hỏi:** Which widget is most commonly used to arrange children vertically?
- A. Row
- B. Stack
- C. Column
- D. Expanded

- **Đáp án:** **C. Column**
- **Giải thích chi tiết:**
  - Widget `Column` là widget bố cục cơ bản trong Flutter dùng để sắp xếp danh sách các widget con theo một **chiều dọc** (Vertical).
  - `Row` sắp xếp theo chiều ngang; `Stack` xếp chồng theo chiều sâu.
- **Kiến thức thuộc về:** Flutter UI Layout / `Column` Layout Widget.

---

### **Câu 34**
**Câu hỏi:** Which curve creates a bounce effect?
- A. linear
- B. easeIn
- C. bounceOut
- D. decelerate

- **Đáp án:** **C. bounceOut**
- **Giải thích chi tiết:**
  - Trong hệ thống hoạt ảnh của Flutter, lớp `Curves` cung cấp nhiều đường cong chuyển động có sẵn. Trong đó, `Curves.bounceOut` tạo ra hiệu ứng chuyển động nảy lên nảy xuống giống như một quả bóng rơi xuống sàn và nảy nảy trước khi dừng lại hoàn toàn ở điểm đích.
- **Kiến thức thuộc về:** Flutter Animations / Animation Curves (`Curves.bounceOut`).

---

### **Câu 35**
**Câu hỏi:** Which test runs fastest?
- A. Integration test
- B. Widget test
- C. Unit test
- D. Manual test

- **Đáp án:** **C. Unit test**
- **Giải thích chi tiết:**
  - Trong kim tự tháp kiểm thử (Testing Pyramid):
    - **Unit Test (Nhanh nhất):** Chỉ thực thi kiểm tra các hàm/logic thuần Dart trên CPU máy tính mà không cần khởi tạo framework giao diện hay thiết bị giả lập, thường chạy xong hàng trăm test chỉ trong vài giây.
    - **Widget Test (Trung bình):** Cần khởi tạo môi trường giả lập cây widget của Flutter.
    - **Integration Test (Chậm nhất):** Cần build và chạy toàn bộ ứng dụng trên thiết bị thật/máy ảo.
- **Kiến thức thuộc về:** Software Testing / Testing Pyramid & Execution Performance.

---

### **Câu 36**
**Câu hỏi:** What is the main purpose of hot reload in Flutter?
- A. Improve runtime performance
- B. Instantly reflect code changes in UI
- C. Publish apps faster
- D. Reduce memory usage

- **Đáp án:** **B. Instantly reflect code changes in UI**
- **Giải thích chi tiết:**
  - Tính năng Hot Reload bơm trực tiếp các tệp mã nguồn Dart mới được chỉnh sửa vào máy ảo Dart VM đang chạy. Flutter tự động rebuild lại cây widget và phản ánh ngay lập tức thay đổi lên màn hình thiết bị chỉ trong chưa đầy 1 giây mà vẫn giữ nguyên trạng thái ứng dụng (Preserve state), giúp tăng vọt năng suất làm việc của lập trình viên.
- **Kiến thức thuộc về:** Developer Productivity & Tools / Flutter Hot Reload.

---

### **Câu 37**
**Câu hỏi:** Why should database operations be asynchronous?
- A. Simplify syntax
- B. Avoid blocking UI thread
- C. Reduce code
- D. Improve theme

- **Đáp án:** **B. Avoid blocking UI thread**
- **Giải thích chi tiết:**
  - Các thao tác đọc/ghi cơ sở dữ liệu (I/O) mất từ vài mili-giây đến hàng trăm mili-giây. Nếu chạy đồng bộ (blocking), luồng vẽ giao diện chính (UI Thread / Main Isolate) sẽ bị đứng hình, gây đơ ứng dụng (App Not Responding - ANR). Thực hiện bất đồng bộ (`async`/`await`) giúp I/O chạy ngầm và UI thread luôn phản hồi mượt mà.
- **Kiến thức thuộc về:** Concurrency & Asynchronous Programming / UI Thread Non-Blocking.

---

### **Câu 38**
**Câu hỏi:** What is the primary purpose of ThemeData in Flutter?
- A. Manage navigation
- B. Define application-wide visual styles
- C. Handle state changes
- D. Control animations

- **Đáp án:** **B. Define application-wide visual styles**
- **Giải thích chi tiết:**
  - `ThemeData` là đối tượng chứa toàn bộ cấu hình phong cách thị giác chung cho toàn bộ ứng dụng bao gồm: hệ màu sắc (`ColorScheme`), phông chữ (`TextTheme`), kiểu dáng thanh tiêu đề (`AppBarTheme`), kiểu nút bấm (`ElevatedButtonTheme`), hình dáng thẻ (`CardTheme`)...
- **Kiến thức thuộc về:** Flutter UI Design / Theming & Styling (`ThemeData`).

---

### **Câu 39**
**Câu hỏi:** Why should API responses be mapped to models?
- A. Reduce JSON size
- B. Ensure type safety
- C. Speed up UI
- D. Improve theme

- **Đáp án:** **B. Ensure type safety**
- **Giải thích chi tiết:**
  - Khi nhận dữ liệu JSON dạng `Map<String, dynamic>` từ API, việc map (chuyển đổi) sang các class Model cụ thể với các thuộc tính định kiểu rõ ràng (`String`, `int`, `DateTime`...) đảm bảo tính **Type Safety** (an toàn kiểu dữ liệu).
  - Điều này giúp tận dụng tính năng tự động hoàn thành mã (code completion) của IDE, bắt lỗi sai tên trường/kiểu dữ liệu ngay tại compile time thay vì bị crash khi chạy ứng dụng.
- **Kiến thức thuộc về:** Data Serialization & Modeling / Model Classes & Type Safety.

---

### **Câu 40**
**Câu hỏi:** How can data be passed to a new screen?
- A. Using global variables
- B. Via constructor arguments
- C. Using ThemeData
- D. Using Scaffold

- **Đáp án:** **B. Via constructor arguments**
- **Giải thích chi tiết:**
  - Phương pháp tiêu chuẩn và an toàn nhất để truyền dữ liệu giữa các màn hình là khai báo các tham số trong hàm khởi tạo (**Constructor arguments**) của widget màn hình đích và truyền trực tiếp dữ liệu khi gọi `Navigator.push(context, MaterialPageRoute(builder: (context) => DetailScreen(item: item)))`.
- **Kiến thức thuộc về:** Flutter Navigation / Parameter Passing.

---

### **Câu 41**
**Câu hỏi:** What role does the Flutter framework play in application development?
- A. It manages database servers
- B. It provides UI components and rendering logic
- C. It replaces the operating system
- D. It runs backend business logic

- **Đáp án:** **B. It provides UI components and rendering logic**
- **Giải thích chi tiết:**
  - Framework Flutter đóng vai trò là một UI Toolkit toàn diện: cung cấp kho thư viện các thành phần giao diện (UI Components/Widgets phong phú theo phong cách Material và Cupertino) cùng với toàn bộ pipeline xử lý layout, hit-testing, cử chỉ và logic kết xuất đồ họa (rendering logic).
- **Kiến thức thuộc về:** Flutter Framework Architecture / UI Toolkit Role.

---

### **Câu 42**
**Câu hỏi:** What is the main benefit of using Maps in Dart?
- A. Storing values without keys
- B. Storing key-value pairs
- C. Rendering UI components
- D. Managing asynchronous tasks

- **Đáp án:** **B. Storing key-value pairs**
- **Giải thích chi tiết:**
  - `Map` trong Dart là cấu trúc dữ liệu bảng băm (hash map) lưu trữ các cặp khóa - giá trị (`key: value`). Lợi ích chính là cho phép tra cứu, thêm, sửa, xóa giá trị cực nhanh dựa trên khóa định danh duy nhất (Unique Key).
- **Kiến thức thuộc về:** Dart Collections / Map Data Structure.

---

### **Câu 43**
**Câu hỏi:** Which Flutter service simplifies authentication implementation?
- A. sqflite
- B. Firebase Authentication
- C. Provider
- D. http

- **Đáp án:** **B. Firebase Authentication**
- **Giải thích chi tiết:**
  - **Firebase Authentication** (thông qua package `firebase_auth`) là dịch vụ Backend-as-a-Service (BaaS) toàn diện của Google, cung cấp sẵn toàn bộ hệ thống xác thực người dùng (Email/Password, Google, Apple, Phone SMS, OAuth...) giúp lập trình viên tích hợp tính năng đăng nhập bảo mật nhanh chóng mà không cần tự xây dựng backend xác thực từ đầu.
- **Kiến thức thuộc về:** Mobile Authentication & Backend Integration / Firebase Authentication.

---

### **Câu 44**
**Câu hỏi:** Why should animations be disposed properly?
- A. Improve UI
- B. Prevent memory leaks
- C. Speed up builds
- D. Fix layout

- **Đáp án:** **B. Prevent memory leaks**
- **Giải thích chi tiết:**
  - Đối tượng `AnimationController` sử dụng `Ticker` để liên tục lắng nghe tín hiệu vẽ khung hình từ engine. Nếu không gọi `controller.dispose()` khi `State` của widget bị hủy, Ticker vẫn tiếp tục chạy ngầm trong bộ nhớ, dẫn đến rò rỉ bộ nhớ (**Memory leaks**), hao pin và cảnh báo lỗi trong quá trình chạy.
- **Kiến thức thuộc về:** Flutter Lifecycle / Resource Management & Memory Leaks.

---

### **Câu 45**
**Câu hỏi:** Which widget is best used to add fixed empty space?
- A. Padding
- B. Expanded
- C. SizedBox
- D. Container

- **Đáp án:** **C. SizedBox**
- **Giải thích chi tiết:**
  - `SizedBox(width: ..., height: ...)` là widget đơn giản, nhẹ và tối ưu nhất về mặt hiệu năng render để tạo ra một khoảng trống có kích thước cố định giữa các widget trong `Column` hoặc `Row`.
- **Kiến thức thuộc về:** Flutter UI Layout / Spacing & `SizedBox`.

---

### **Câu 46**
**Câu hỏi:** What is the purpose of the Flutter SDK?
- A. To store application data permanently
- B. To provide tools and libraries for Flutter development
- C. To deploy applications directly to app stores
- D. To replace the operating system of a device

- **Đáp án:** **B. To provide tools and libraries for Flutter development**
- **Giải thích chi tiết:**
  - **Flutter SDK (Software Development Kit)** là gói phần mềm cung cấp đầy đủ các công cụ biên dịch (compilers), công cụ dòng lệnh (Flutter CLI), engine kết xuất đồ họa, và kho thư viện mã nguồn phong phú (framework libraries) để phục vụ cho việc phát triển, kiểm thử và build ứng dụng Flutter.
- **Kiến thức thuộc về:** Flutter SDK Fundamentals & Tooling.

---

### **Câu 47**
**Câu hỏi:** What is the main goal of performance optimization in Flutter apps?
- A. Improve UI colors
- B. Ensure smooth and responsive UI
- C. Reduce code size
- D. Add features

- **Đáp án:** **B. Ensure smooth and responsive UI**
- **Giải thích chi tiết:**
  - Mục đích hàng đầu của tối ưu hiệu năng là đảm bảo ứng dụng luôn chạy mượt mà, phản hồi tức thì với mọi thao tác vuốt chạm của người dùng và duy trì tốc độ kết xuất khung hình ổn định ở mức 60/120 FPS không bị lag.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Frame Budget & Smoothness.

---

### **Câu 48**
**Câu hỏi:** Which widget is suitable for displaying items in a grid layout?
- A. ListView
- B. Column
- C. GridView
- D. Stack

- **Đáp án:** **C. GridView**
- **Giải thích chi tiết:**
  - `GridView` là widget chuyên dụng trong Flutter dùng để sắp xếp và hiển thị các phần tử con theo dạng lưới hai chiều (hàng và cột) có khả năng cuộn được (ví dụ: lưới sản phẩm thương mại điện tử, lưới ảnh thư viện).
- **Kiến thức thuộc về:** Flutter UI Layout / Grid Layouts (`GridView`).

---

### **Câu 49**
**Câu hỏi:** Which platforms can Flutter applications target using a single codebase?
- A. Android only
- B. iOS only
- C. Android, iOS, web, and desktop
- D. Web servers only

- **Đáp án:** **C. Android, iOS, web, and desktop**
- **Giải thích chi tiết:**
  - Từ một cơ sở mã nguồn duy nhất, Flutter có thể biên dịch trực tiếp sang các ứng dụng native chạy trên **Android, iOS, Web browsers, và Desktop (Windows, macOS, Linux)**.
- **Kiến thức thuộc về:** Flutter Overview / Multi-platform Support.

---

### **Câu 50**
**Câu hỏi:** Which Flutter plugin provides SQLite support?
- A. hive
- B. moor
- C. sqflite
- D. shared_preferences

- **Đáp án:** **C. sqflite**
- **Giải thích chi tiết:**
  - `sqflite` là plugin chính thức phổ biến nhất cung cấp khả năng làm việc với cơ sở dữ liệu quan hệ cục bộ SQLite trong Flutter, hỗ trợ đầy đủ các thao tác CRUD, transaction và truy vấn SQL thuần.
- **Kiến thức thuộc về:** Local Storage & Databases / SQLite with `sqflite`.
