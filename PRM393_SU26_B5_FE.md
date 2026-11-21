# ĐỀ TRẮC NGHIỆM PRM393 - SU26 - B5 - FE

---

### **Câu 1**
**Câu hỏi:** Which method saves an integer in SharedPreferences?
- A. saveInt()
- B. putInt()
- C. setInt()
- D. writeInt()

- **Đáp án:** **C. setInt()**
- **Giải thích:** Trong Flutter với package `shared_preferences`, đối tượng `SharedPreferences` cung cấp các phương thức bất đồng bộ để lưu dữ liệu nguyên thủy theo dạng key-value, bắt đầu bằng tiền tố `set...` như `setInt(String key, int value)`, `setString()`, `setBool()`, `setDouble()`, `setStringList()`.
- **Kiến thức thuộc về:** Local Data Storage / SharedPreferences trong Flutter.

---

### **Câu 2**
**Câu hỏi:** What is the purpose of the Flutter SDK?
- A. To store application data permanently
- B. To provide tools and libraries for Flutter development
- C. To deploy applications directly to app stores
- D. To replace the operating system of a device

- **Đáp án:** **B. To provide tools and libraries for Flutter development**
- **Giải thích:** Flutter SDK (Software Development Kit) là bộ công cụ phát triển phần mềm toàn diện của Google, bao gồm framework UI (widgets, rendering engine), trình biên dịch Dart (compiler), công cụ dòng lệnh (Flutter CLI) và các thư viện cần thiết để xây dựng, kiểm thử và biên dịch ứng dụng đa nền tảng.
- **Kiến thức thuộc về:** Flutter Overview & Architecture / Flutter SDK.

---

### **Câu 3**
**Câu hỏi:** What is rebuild scope optimization in Flutter?
- A. Reducing widget tree depth
- B. Limiting rebuild to affected widgets
- C. Caching API responses
- D. Using global state

- **Đáp án:** **B. Limiting rebuild to affected widgets**
- **Giải thích:** Tối ưu hóa phạm vi rebuild (Rebuild scope optimization) là kỹ thuật tổ chức cây widget và quản lý trạng thái sao cho khi state thay đổi, chỉ những widget con thực sự bị ảnh hưởng mới được xây dựng lại (rebuilt), tránh kích hoạt `build()` trên các cây widget cha không cần thiết, giúp tăng tốc độ xử lý khung hình.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Rebuild Scope & Widget Tree.

---

### **Câu 4**
**Câu hỏi:** Which widget enables custom scroll effects in Flutter?
- A. ListView
- B. SingleChildScrollView
- C. CustomScrollView
- D. Column

- **Đáp án:** **C. CustomScrollView**
- **Giải thích:** `CustomScrollView` cho phép tích hợp và tùy biến nhiều hiệu ứng cuộn phức tạp thông qua việc kết hợp các thành phần `Sliver` (như `SliverAppBar`, `SliverList`, `SliverGrid`) trong cùng một vùng cuộn duy nhất.
- **Kiến thức thuộc về:** Flutter UI & Scrolling / CustomScrollView & Slivers.

---

### **Câu 5**
**Câu hỏi:** What is the primary role of widgets in Flutter?
- A. Managing databases
- B. Describing the user interface
- C. Handling network requests
- D. Compiling Dart code

- **Đáp án:** **B. Describing the user interface**
- **Giải thích:** Trong Flutter, triết lý thiết kế cơ bản là "Everything is a Widget". Vai trò chính của widget là một cấu hình khai báo (declarative description) mô tả giao diện người dùng trông như thế nào dựa trên cấu hình và dữ liệu trạng thái hiện tại.
- **Kiến thức thuộc về:** Flutter Core Fundamentals / Widgets & Declarative UI.

---

### **Câu 6**
**Câu hỏi:** Why should animations be disposed properly?
- A. Improve UI
- B. Prevent memory leaks
- C. Speed up builds
- D. Fix layout

- **Đáp án:** **B. Prevent memory leaks**
- **Giải thích:** `AnimationController` sử dụng `Ticker` gắn với hệ thống render của Flutter. Nếu không gọi `dispose()` khi widget bị hủy, các bộ lắng nghe (listeners) và ticker vẫn tiếp tục tiêu tốn tài nguyên ngầm, gây rò rỉ bộ nhớ (memory leaks) và sụt giảm hiệu năng nghiêm trọng.
- **Kiến thức thuộc về:** Flutter Animations / AnimationController Lifecycle & Resource Disposal.

---

### **Câu 7**
**Câu hỏi:** Which package supports BLoC architecture?
- A. provider
- B. flutter_bloc
- C. sqflite
- D. http

- **Đáp án:** **B. flutter_bloc**
- **Giải thích:** Package `flutter_bloc` cung cấp các tiện ích và widget tích hợp mạnh mẽ trong Flutter (như `BlocProvider`, `BlocBuilder`, `BlocListener`, `BlocConsumer`) để xây dựng ứng dụng theo kiến trúc BLoC (Business Logic Component).
- **Kiến thức thuộc về:** State Management / BLoC Pattern & flutter_bloc.

---

### **Câu 8**
**Câu hỏi:** What is the role of events in BLoC?
- A. Store UI
- B. Trigger state changes
- C. Render widgets
- D. Handle layout

- **Đáp án:** **B. Trigger state changes**
- **Giải thích:** Trong kiến trúc BLoC, "Events" là các tín hiệu/dữ liệu đầu vào do UI hoặc hệ thống phát ra để thông báo một hành động đã diễn ra. BLoC tiếp nhận các event này, thực thi logic nghiệp vụ và kích hoạt phát ra các State mới (trigger state changes).
- **Kiến thức thuộc về:** State Management / BLoC Architecture (Events & States).

---

### **Câu 9**
**Câu hỏi:** Why should database operations be asynchronous?
- A. Simplify syntax
- B. Avoid blocking UI thread
- C. Reduce code
- D. Improve theme

- **Đáp án:** **B. Avoid blocking UI thread**
- **Giải thích:** Các thao tác đọc/ghi cơ sở dữ liệu trên đĩa (I/O operations) thường tốn thời gian. Nếu chạy đồng bộ (synchronous), luồng giao diện chính (UI thread) sẽ bị chặn lại, gây đơ lag và giật khung hình. Việc chạy bất đồng bộ (`async`/`await`) giúp ứng dụng giữ được độ mượt mà 60/120 FPS.
- **Kiến thức thuộc về:** Asynchronous Programming & Database / UI Thread Management.

---

### **Câu 10**
**Câu hỏi:** Why is logout functionality important?
- A. Free memory
- B. End user session securely
- C. Improve UI
- D. Change theme

- **Đáp án:** **B. End user session securely**
- **Giải thích:** Tính năng Logout đóng vai trò cốt lõi trong an toàn bảo mật, giúp xóa bỏ session, hủy token xác thực và trả người dùng về trạng thái chưa đăng nhập, ngăn chặn các nguy cơ truy cập trái phép.
- **Kiến thức thuộc về:** Authentication & Security / Session Lifecycle Management.

---

### **Câu 11**
**Câu hỏi:** What is Cubit in BLoC?
- A. UI widget
- B. Simplified BLoC without events
- C. Database layer
- D. Animation helper

- **Đáp án:** **B. Simplified BLoC without events**
- **Giải thích:** `Cubit` là một biến thể tinh giản của `Bloc`. Thay vì phải định nghĩa các Event class riêng biệt và ánh xạ qua event handler, Cubit cung cấp các hàm (methods) trực tiếp để UI gọi và tự phát ra (`emit`) State mới.
- **Kiến thức thuộc về:** State Management / BLoC vs Cubit.

---

### **Câu 12**
**Câu hỏi:** Which widget helps avoid rebuilding unchanged UI parts?
- A. Container
- B. RepaintBoundary
- C. Column
- D. FutureBuilder

- **Đáp án:** **B. RepaintBoundary**
- **Giải thích:** `RepaintBoundary` tạo một lớp vẽ riêng (Display List/Layer riêng) trong quá trình render. Khi một phần giao diện khác trên màn hình bị vẽ lại (repaint), subtree bên trong `RepaintBoundary` nếu không đổi thì sẽ được giữ nguyên mà không phải thực hiện lại tác vụ paint.
- **Kiến thức thuộc về:** Flutter Performance Optimization / RepaintBoundary & Paint Isolation.

---

### **Câu 13**
**Câu hỏi:** Which keyword is used in Dart to pause execution until a Future completes?
- A. async
- B. await
- C. future
- D. delay

- **Đáp án:** **B. await**
- **Giải thích:** Trong ngôn ngữ Dart, từ khóa `await` được đặt trước biểu thức `Future` trong một hàm `async` nhằm tạm dừng việc thực thi luồng tuần tự bên trong hàm đó cho tới khi Future hoàn thành và trả về kết quả.
- **Kiến thức thuộc về:** Dart Language Fundamentals / Asynchronous Programming (async/await).

---

### **Câu 14**
**Câu hỏi:** What does an integration test verify?
- A. Single function
- B. Widget rendering
- C. End-to-end app behavior
- D. Theme consistency

- **Đáp án:** **C. End-to-end app behavior**
- **Giải thích:** Kiểm thử tích hợp (Integration Test) kiểm tra toàn bộ luồng hoạt động hoàn chỉnh từ đầu đến cuối của ứng dụng (End-to-end app behavior) trên thiết bị thật hoặc máy ảo, đảm bảo sự phối hợp trơn tru giữa UI, logic và các dịch vụ nền tảng.
- **Kiến thức thuộc về:** Software Testing / Integration Tests & End-to-End Testing.

---

### **Câu 15**
**Câu hỏi:** Which Flutter service simplifies authentication implementation?
- A. sqflite
- B. Firebase Authentication
- C. Provider
- D. http

- **Đáp án:** **B. Firebase Authentication**
- **Giải thích:** `Firebase Authentication` là giải pháp Backend-as-a-Service do Google cung cấp, hỗ trợ sẵn SDK xác thực người dùng qua Email/Password, OTP, OAuth (Google, Apple, Facebook) một cách bảo mật và nhanh chóng trong Flutter.
- **Kiến thức thuộc về:** Backend Services & Authentication / Firebase Authentication.

---

### **Câu 16**
**Câu hỏi:** How can data be passed to a new screen?
- A. Using global variables
- B. Via constructor arguments
- C. Using ThemeData
- D. Using Scaffold

- **Đáp án:** **B. Via constructor arguments**
- **Giải thích:** Phương thức chuẩn và an toàn kiểu (type-safe) nhất để truyền dữ liệu sang màn hình mới trong Flutter là truyền trực tiếp thông qua các tham số khởi tạo (constructor arguments) của Widget màn hình đích.
- **Kiến thức thuộc về:** Navigation & Routing / Passing Data Between Screens.

---

### **Câu 17**
**Câu hỏi:** Which HTTP method is typically used to retrieve data?
- A. POST
- B. PUT
- C. GET
- D. DELETE

- **Đáp án:** **C. GET**
- **Giải thích:** Trong chuẩn giao thức HTTP và RESTful API, phương thức `GET` được quy định dùng để yêu cầu lấy/đọc dữ liệu từ server mà không làm thay đổi trạng thái của server.
- **Kiến thức thuộc về:** Networking & REST API / HTTP Methods.

---

### **Câu 18**
**Câu hỏi:** What is implicit animation?
- A. Manual animation control
- B. Animation without controller
- C. API animation
- D. Navigation animation

- **Đáp án:** **B. Animation without controller**
- **Giải thích:** Implicit Animation (ví dụ `AnimatedContainer`, `AnimatedOpacity`) là các widget hoạt họa có sẵn của Flutter, tự động tạo chuyển động mượt mà khi các giá trị thuộc tính thay đổi mà lập trình viên không cần khởi tạo hay điều khiển `AnimationController` thủ công.
- **Kiến thức thuộc về:** Flutter Animations / Implicit Animations.

---

### **Câu 19**
**Câu hỏi:** What is one of the main advantages of Flutter?
- A. Requires separate codebases for Android and iOS
- B. Uses JavaScript as its primary language
- C. Enables building apps from a single codebase for multiple platforms
- D. Only supports mobile platforms

- **Đáp án:** **C. Enables building apps from a single codebase for multiple platforms**
- **Giải thích:** Lợi thế hàng đầu của Flutter là khả năng phát triển ứng dụng đa nền tảng (iOS, Android, Web, Desktop) từ một nguồn mã nguồn duy nhất (single codebase), giúp tiết kiệm đáng kể thời gian và chi phí phát triển.
- **Kiến thức thuộc về:** Flutter Overview & Architecture / Multi-Platform Advantages.

---

### **Câu 20**
**Câu hỏi:** What role does the Flutter framework play in application development?
- A. It manages database servers
- B. It provides UI components and rendering logic
- C. It replaces the operating system
- D. It runs backend business logic

- **Đáp án:** **B. It provides UI components and rendering logic**
- **Giải thích:** Framework của Flutter (viết bằng Dart) cung cấp hệ thống thư viện widget đa dạng (Material Design, Cupertino), logic dàn trang (layout), xử lý cử chỉ (gestures) và điều phối vẽ giao diện hiển thị lên màn hình.
- **Kiến thức thuộc về:** Flutter Overview & Architecture / Framework Layer Role.

---

### **Câu 21**
**Câu hỏi:** What format is most commonly used in REST APIs?
- A. XML
- B. CSV
- C. JSON
- D. Binary

- **Đáp án:** **C. JSON**
- **Giải thích:** JSON (JavaScript Object Notation) là định dạng trao đổi dữ liệu dạng văn bản gọn nhẹ, dễ phân tích cú pháp (parse) và được sử dụng làm chuẩn phổ biến nhất trong các dịch vụ RESTful Web API.
- **Kiến thức thuộc về:** Networking & REST API / JSON Data Format.

---

### **Câu 22**
**Câu hỏi:** What is the main concept behind navigation in Flutter using the Navigator widget?
- A. Screens are arranged in a grid layout
- B. Screens are managed using a stack (push and pop)
- C. Screens are loaded randomly
- D. Screens are replaced automatically without control

- **Đáp án:** **B. Screens are managed using a stack (push and pop)**
- **Giải thích:** Cơ chế điều hướng trong Flutter thông qua widget `Navigator` hoạt động dựa trên mô hình ngăn xếp (Stack LIFO): mở màn hình mới bằng thao tác `push()` (đẩy vào stack) và quay lại màn hình trước bằng thao tác `pop()` (lấy ra khỏi stack).
- **Kiến thức thuộc về:** Navigation & Routing / Navigator Stack (Push & Pop).

---

### **Câu 23**
**Câu hỏi:** What is the main limitation of SharedPreferences?
- A. Cannot persist data
- B. Only works on web
- C. Not suitable for large or complex data
- D. Requires SQL queries

- **Đáp án:** **C. Not suitable for large or complex data**
- **Giải thích:** `SharedPreferences` lưu trữ dưới dạng key-value nguyên thủy đơn giản trong file XML/plist, không có cơ chế lập chỉ mục hay truy vấn quan hệ, nên không phù hợp để lưu trữ tập dữ liệu lớn hoặc cấu trúc dữ liệu quan hệ phức tạp.
- **Kiến thức thuộc về:** Local Data Storage / SharedPreferences Limitations.

---

### **Câu 24**
**Câu hỏi:** What does a Tween define?
- A. Animation speed
- B. Value range for animation
- C. UI layout
- D. State logic

- **Đáp án:** **B. Value range for animation**
- **Giải thích:** Trong hệ thống Explicit Animation của Flutter, `Tween` (viết tắt của "between") định nghĩa một dải giá trị chuyển đổi từ điểm bắt đầu (`begin`) đến điểm kết thúc (`end`) (ví dụ từ số, màu sắc, kích thước hay tọa độ).
- **Kiến thức thuộc về:** Flutter Animations / Tween & Value Interpolation.

---

### **Câu 25**
**Câu hỏi:** What is pagination used for?
- A. UI animation
- B. Handling large datasets efficiently
- C. Theme management
- D. Authentication

- **Đáp án:** **B. Handling large datasets efficiently**
- **Giải thích:** Phân trang (Pagination) là kỹ thuật chia nhỏ một lượng dữ liệu lớn thành từng trang (chunks/pages) để tải từng phần theo yêu cầu của người dùng, giúp tối ưu hiệu năng mạng và tiết kiệm bộ nhớ RAM của ứng dụng.
- **Kiến thức thuộc về:** Networking & Performance / Data Pagination.

---

### **Câu 26**
**Câu hỏi:** What is the main purpose of hot reload in Flutter?
- A. Improve runtime performance
- B. Instantly reflect code changes in UI
- C. Publish apps faster
- D. Reduce memory usage

- **Đáp án:** **B. Instantly reflect code changes in UI**
- **Giải thích:** Tính năng Hot Reload của Flutter nạp trực tiếp các thay đổi trong mã nguồn vào Dart VM đang chạy mà vẫn giữ nguyên trạng thái ứng dụng (app state), giúp lập trình viên thấy ngay kết quả giao diện trên màn hình chỉ trong vài mili-giây.
- **Kiến thức thuộc về:** Flutter Developer Tools / Hot Reload & Development Workflow.

---

### **Câu 27**
**Câu hỏi:** What design principle improves form usability?
- A. Long forms
- B. Minimal validation
- C. Clear labels and feedback
- D. Hidden errors

- **Đáp án:** **C. Clear labels and feedback**
- **Giải thích:** Để nâng cao tính khả dụng (usability) của biểu mẫu (form), giao diện cần cung cấp các nhãn dán rõ ràng (clear labels), thông điệp hướng dẫn và phản hồi lỗi xác thực (validation feedback) minh bạch ngay khi người dùng nhập dữ liệu.
- **Kiến thức thuộc về:** UI/UX & Forms / Form Usability & User Feedback.

---

### **Câu 28**
**Câu hỏi:** What does a Dart class primarily represent?
- A. A UI widget only
- B. A blueprint for creating objects
- C. A database table
- D. A network request

- **Đáp án:** **B. A blueprint for creating objects**
- **Giải thích:** Trong lập trình hướng đối tượng (OOP) của Dart, một `class` là một khuôn mẫu/bản thiết kế (blueprint) định nghĩa các thuộc tính (properties) và phương thức (methods) để khởi tạo nên các đối tượng (objects).
- **Kiến thức thuộc về:** Dart Language Fundamentals / Classes & OOP Concepts.

---

### **Câu 29**
**Câu hỏi:** Which practice improves authentication security?
- A. Storing passwords locally
- B. Encrypting credentials
- C. Using HTTP
- D. Hardcoding tokens

- **Đáp án:** **B. Encrypting credentials**
- **Giải thích:** Mã hóa thông tin đăng nhập (Encrypting credentials) và lưu trữ khóa/token an toàn trong bộ nhớ bảo mật (như Keychain trên iOS hay Keystore trên Android thông qua `flutter_secure_storage`) là thực hành tối quan trọng để bảo vệ dữ liệu người dùng.
- **Kiến thức thuộc về:** Security & Authentication / Secure Storage & Credential Encryption.

---

### **Câu 30**
**Câu hỏi:** What is the role of BuildContext in Flutter?
- A. Store application data
- B. Locate widgets in the widget tree
- C. Manage navigation history
- D. Render UI pixels

- **Đáp án:** **B. Locate widgets in the widget tree**
- **Giải thích:** `BuildContext` là đối tượng đại diện cho vị trí (handle) của một widget cụ thể trong toàn bộ cây widget (widget tree), cho phép widget tìm kiếm các widget tổ tiên (như `Navigator.of(context)`, `Theme.of(context)`).
- **Kiến thức thuộc về:** Flutter Core Fundamentals / BuildContext & Widget Tree Navigation.

---

### **Câu 31**
**Câu hỏi:** What does the Padding widget do?
- A. Adds space inside a widget
- B. Adds space between widgets
- C. Aligns widgets
- D. Controls widget size

- **Đáp án:** **A. Adds space inside a widget**
- **Giải thích:** Widget `Padding` trong Flutter dùng để thêm khoảng cách trống (khoảng đệm bên trong) bao quanh widget con của nó theo các cạnh được chỉ định bởi `EdgeInsets`.
- **Kiến thức thuộc về:** Flutter Layout Widgets / Padding & Insets.

---

### **Câu 32**
**Câu hỏi:** What is Hive mainly used for?
- A. Remote database
- B. Lightweight local NoSQL storage
- C. State management
- D. Routing

- **Đáp án:** **B. Lightweight local NoSQL storage**
- **Giải thích:** `Hive` là một cơ sở dữ liệu NoSQL cục bộ dạng key-value tốc độ cao, viết thuần bằng ngôn ngữ Dart, nhẹ và không yêu cầu phụ thuộc thư viện native nặng nề.
- **Kiến thức thuộc về:** Local Data Storage / Hive Database.

---

### **Câu 33**
**Câu hỏi:** Why should navigation logic be well-structured?
- A. Reduce UI size
- B. Improve maintainability
- C. Increase speed
- D. Avoid widgets

- **Đáp án:** **B. Improve maintainability**
- **Giải thích:** Cấu trúc điều hướng được tổ chức tốt (tách riêng routes, dùng named routing hoặc router packages) giúp mã nguồn trở nên rõ ràng, dễ đọc, dễ kiểm thử và dễ bảo trì, nâng cấp trong các dự án quy mô lớn.
- **Kiến thức thuộc về:** Navigation & Architecture / Code Maintainability.

---

### **Câu 34**
**Câu hỏi:** What is the purpose of onSaved callback?
- A. Validate input
- B. Store form values
- C. Reset form
- D. Display errors

- **Đáp án:** **B. Store form values**
- **Giải thích:** Callback `onSaved` trong các widget nhập liệu dạng `FormField`/`TextFormField` được thực thi khi gọi `FormState.save()`, có nhiệm vụ lấy dữ liệu nhập vào và lưu/gán vào các biến hoặc model dữ liệu tương ứng.
- **Kiến thức thuộc về:** Forms & User Input / FormField onSaved Callback.

---

### **Câu 35**
**Câu hỏi:** Which feature of Dart helps prevent null reference errors at compile time?
- A. Dynamic typing
- B. Hot reload
- C. Null safety
- D. Asynchronous execution

- **Đáp án:** **C. Null safety**
- **Giải thích:** Cơ chế Null Safety (Sound Null Safety) của Dart phân định rõ ràng giữa kiểu dữ liệu có thể null (`Type?`) và không null (`Type`), giúp phát hiện và ngăn chặn triệt để lỗi truy cập giá trị null ngay từ giai đoạn biên dịch.
- **Kiến thức thuộc về:** Dart Language Fundamentals / Sound Null Safety.

---

### **Câu 36**
**Câu hỏi:** Which sliver is commonly used to display a scrolling list?
- A. SliverGrid
- B. SliverList
- C. SliverAppBar
- D. SliverFillRemaining

- **Đáp án:** **B. SliverList**
- **Giải thích:** `SliverList` là widget sliver chuyên dụng trong `CustomScrollView` dùng để hiển thị một danh sách các phần tử cuộn theo thứ tự tuyến tính với cơ chế tạo widget lười (lazy-building) nhằm tối ưu hiệu năng.
- **Kiến thức thuộc về:** Flutter UI & Scrolling / Slivers & SliverList.

---

### **Câu 37**
**Câu hỏi:** In Flutter architecture, which layer is responsible for rendering and uses C++ with Skia?
- A. Framework Layer
- B. Engine Layer
- C. Embedder Layer
- D. Widget Layer

- **Đáp án:** **B. Engine Layer**
- **Giải thích:** Tầng Engine (Flutter Engine) được viết chủ yếu bằng C/C++, bao gồm thư viện đồ họa Skia (hoặc Impeller) đảm nhiệm việc kết xuất đồ họa cấp thấp (low-level rendering), Dart runtime, và các dịch vụ nền tảng.
- **Kiến thức thuộc về:** Flutter Overview & Architecture / Engine Layer Architecture.

---

### **Câu 38**
**Câu hỏi:** Which curve creates a bounce effect?
- A. linear
- B. easeIn
- C. bounceOut
- D. decelerate

- **Đáp án:** **C. bounceOut**
- **Giải thích:** Lớp `Curves` cung cấp `Curves.bounceOut` tạo hiệu ứng hoạt họa nảy bật (bounce) ở cuối chu kỳ chuyển động, mô phỏng phản xạ vật lý tự nhiên.
- **Kiến thức thuộc về:** Flutter Animations / Animation Curves & Easing.

---

### **Câu 39**
**Câu hỏi:** Which programming language is used to develop Flutter applications?
- A. Kotlin
- B. Swift
- C. Dart
- D. JavaScript

- **Đáp án:** **C. Dart**
- **Giải thích:** Ngôn ngữ lập trình chính thức được Google lựa chọn và phát triển để viết framework Flutter cũng như các ứng dụng Flutter là Dart.
- **Kiến thức thuộc về:** Flutter Overview & Architecture / Dart Language.

---

### **Câu 40**
**Câu hỏi:** When does Flutter rebuild the widget tree?
- A. On every frame
- B. When state changes
- C. Only when app restarts
- D. Only during hot restart

- **Đáp án:** **B. When state changes**
- **Giải thích:** Flutter hoạt động theo mô hình giao diện phản ứng (Reactive UI). Cây widget chỉ được kích hoạt xây dựng lại (rebuild) khi có sự thay đổi trạng thái (State changes) thông qua các lệnh như `setState()`, nhận tín hiệu từ Bloc, Provider, v.v.
- **Kiến thức thuộc về:** Flutter Core Fundamentals / Widget Rebuild Lifecycle & State Changes.

---

### **Câu 41**
**Câu hỏi:** What is the main risk of improper state management?
- A. UI inconsistency
- B. Longer compile time
- C. Package conflicts
- D. Build errors

- **Đáp án:** **A. UI inconsistency**
- **Giải thích:** Khi quản lý trạng thái không nhất quán hoặc phân tán, giao diện ở các màn hình khác nhau có thể hiển thị dữ liệu không đồng bộ, sai lệch hoặc không cập nhật đúng trạng thái hiện tại của ứng dụng (UI inconsistency).
- **Kiến thức thuộc về:** State Management / State Consistency & Architecture Risks.

---

### **Câu 42**
**Câu hỏi:** According to the testing pyramid, which type of test should be used the least?
- A. Unit Tests
- B. Widget Tests
- C. Integration Tests
- D. Debug Tests

- **Đáp án:** **C. Integration Tests**
- **Giải thích:** Theo mô hình Kim tự tháp kiểm thử phần mềm (Testing Pyramid), Integration Tests nằm trên đỉnh chóp và chiếm số lượng ít nhất do chi phí tạo lập, thời gian thực thi lâu và độ phức tạp cao hơn so với Unit Tests và Widget Tests.
- **Kiến thức thuộc về:** Software Testing / Testing Pyramid Strategy.

---

### **Câu 43**
**Câu hỏi:** Which approach helps reduce unnecessary widget rebuilds?
- A. Using global variables
- B. Fine-grained state updates
- C. Hot restart
- D. Large widgets

- **Đáp án:** **B. Fine-grained state updates**
- **Giải thích:** Kỹ thuật cập nhật trạng thái chi tiết (Fine-grained state updates) giúp cô lập phạm vi thay đổi state vào các thành phần nhỏ, chỉ kích hoạt rebuild cục bộ ở widget cần hiển thị lại mà không làm ảnh hưởng đến các widget khác.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Rebuild Optimization & Fine-grained Updates.

---

### **Câu 44**
**Câu hỏi:** Which component is required to run and test Flutter applications on a local machine?
- A. A cloud hosting service
- B. A physical server
- C. An emulator or physical device
- D. A database management system

- **Đáp án:** **C. An emulator or physical device**
- **Giải thích:** Để chạy thử và gỡ lỗi trực tiếp ứng dụng Flutter trên máy tính cục bộ, nhà phát triển cần một thiết bị máy ảo (Android Emulator / iOS Simulator) hoặc một thiết bị phần cứng thật (Physical device) được kết nối.
- **Kiến thức thuộc về:** Flutter Environment & Tooling / Emulators & Devices.

---

### **Câu 45**
**Câu hỏi:** Which Dart keyword is used to define a constant value at compile time?
- A. final
- B. static
- C. const
- D. var

- **Đáp án:** **C. const**
- **Giải thích:** Từ khóa `const` trong Dart được dùng để định nghĩa các biến hoặc giá trị hằng số cố định bất biến ngay tại thời điểm biên dịch (compile-time constant).
- **Kiến thức thuộc về:** Dart Language Fundamentals / const vs final Keywords.

---

### **Câu 46**
**Câu hỏi:** Which widget is primarily used as the structural foundation of a Material Design screen in Flutter?
- A. Container
- B. Scaffold
- C. Column
- D. ListView

- **Đáp án:** **B. Scaffold**
- **Giải thích:** `Scaffold` là widget nền tảng xây dựng khung cấu trúc chuẩn cho màn hình Material Design, cung cấp các vị trí bố cục mặc định cho AppBar, Body, FloatingActionButton, Drawer, BottomNavigationBar.
- **Kiến thức thuộc về:** Flutter UI & Material Design / Scaffold Layout.

---

### **Câu 47**
**Câu hỏi:** Which status code indicates server error?
- A. 200
- B. 301
- C. 404
- D. 500

- **Đáp án:** **D. 500**
- **Giải thích:** Trong chuẩn giao thức HTTP, nhóm mã trạng thái `5xx` (tiêu biểu là `500 Internal Server Error`) đại diện cho các lỗi phát sinh do phía máy chủ không thể xử lý yêu cầu.
- **Kiến thức thuộc về:** Networking & REST API / HTTP Status Codes.

---

### **Câu 48**
**Câu hỏi:** Why should authentication state be centralized?
- A. Reduce UI code
- B. Ensure consistent access control
- C. Improve animations
- D. Simplify layout

- **Đáp án:** **B. Ensure consistent access control**
- **Giải thích:** Tập trung hóa trạng thái xác thực (Centralized Authentication State) vào một nguồn chân lý duy nhất (Single Source of Truth) giúp kiểm soát quyền truy cập nhất quán trên toàn bộ ứng dụng, tránh phân mảnh và rò rỉ phiên làm việc.
- **Kiến thức thuộc về:** Authentication & Security / Centralized Authentication State.

---

### **Câu 49**
**Câu hỏi:** Which package is commonly used for Flutter testing?
- A. flutter_test
- B. provider
- C. http
- D. sqflite

- **Đáp án:** **A. flutter_test**
- **Giải thích:** `flutter_test` là gói thư viện kiểm thử chính thức của Flutter SDK, cung cấp đầy đủ các tiện ích để viết và thực thi Unit Tests và Widget Tests.
- **Kiến thức thuộc về:** Software Testing / flutter_test Package.

---

### **Câu 50**
**Câu hỏi:** Why are const widgets recommended?
- A. They improve readability
- B. They reduce rebuild cost
- C. They add state
- D. They handle navigation

- **Đáp án:** **B. They reduce rebuild cost**
- **Giải thích:** Khai báo widget với `const` giúp khởi tạo đối tượng hằng số bất biến tại thời điểm biên dịch, cho phép Flutter tái sử dụng instance và bỏ qua hoàn toàn việc tái khởi tạo hay rebuild lại widget đó khi widget cha thay đổi, từ đó tối ưu hóa chi phí rebuild và cải thiện hiệu năng.
- **Kiến thức thuộc về:** Flutter Performance Optimization / const Constructors & Rebuild Cost Reduction.
