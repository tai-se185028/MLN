# ĐỀ TRẮC NGHIỆM PRM393 - SU26 - FE

---

### **Câu 1**
**Câu hỏi:** Which Dart feature supports object-oriented programming?
- A. Widgets
- B. Classes and objects
- C. Hot reload
- D. Layout builders

- **Đáp án:** **B. Classes and objects**
- **Giải thích chi tiết:**
  - Lập trình hướng đối tượng (OOP - Object-Oriented Programming) trong Dart được xây dựng dựa trên cốt lõi là **Classes (Lớp)** và **Objects (Đối tượng)**. Lớp đóng vai trò như một bản thiết kế (blueprint) định nghĩa các thuộc tính và phương thức, còn đối tượng là thực thể cụ thể (instance) được khởi tạo từ lớp đó.
  - Các lựa chọn khác: Widgets và Layout builders là các khái niệm của riêng Flutter framework; Hot reload là tính năng của môi trường phát triển (developer tooling), không phải đặc trưng của mô hình OOP trong ngôn ngữ Dart.
- **Kiến thức thuộc về:** Dart Programming Fundamentals / Object-Oriented Programming (OOP).

---

### **Câu 2**
**Câu hỏi:** Which method retrieves data from SharedPreferences?
- A. get()
- B. read()
- C. fetch()
- D. load()

- **Đáp án:** **A. get()**
- **Giải thích chi tiết:**
  - Package `shared_preferences` trong Flutter cung cấp API đọc dữ liệu dạng Key-Value thông qua họ phương thức bắt đầu bằng `get` như: `get(key)` (trả về kiểu Object?), `getString(key)`, `getBool(key)`, `getInt(key)`, `getDouble(key)`, `getStringList(key)`.
  - Các phương thức ghi dữ liệu tương ứng bắt đầu bằng `set...` (ví dụ: `setString()`, `setBool()`). Trong API chính thức không có các hàm `read()`, `fetch()`, hay `load()`.
- **Kiến thức thuộc về:** Local Data Storage / Key-Value Storage với `shared_preferences`.

---

### **Câu 3**
**Câu hỏi:** What is Flutter primarily used for?
- A. Designing databases for mobile apps
- B. Creating native applications from a single codebase
- C. Developing server-side applications only
- D. Building operating systems for mobile devices

- **Đáp án:** **B. Creating native applications from a single codebase**
- **Giải thích chi tiết:**
  - Flutter là UI Software Development Kit (SDK) mã nguồn mở được Google phát triển, mục đích chính là cho phép lập trình viên tạo ra các ứng dụng native đa nền tảng (iOS, Android, Web, Windows, macOS, Linux) từ một cơ sở mã nguồn duy nhất (Single Codebase).
  - Flutter tự vẽ toàn bộ pixel giao diện bằng Skia/Impeller engine thay vì bọc các native view như React Native, đem lại hiệu năng cao và độ đồng nhất giao diện tối đa.
- **Kiến thức thuộc về:** Flutter Overview & Cross-Platform Development.

---

### **Câu 4**
**Câu hỏi:** Why should state be kept as local as possible?
- A. Better animations
- B. Reduce unnecessary rebuilds
- C. Simplify UI
- D. Improve navigation

- **Đáp án:** **B. Reduce unnecessary rebuilds**
- **Giải thích chi tiết:**
  - Nguyên tắc "Keep State Local" (giữ state ở phạm vi cục bộ gần nhất với widget cần tiêu thụ dữ liệu) giúp thu hẹp phạm vi ảnh hưởng khi state thay đổi.
  - Khi một state cục bộ kích hoạt hàm `setState()` hoặc cập nhật qua builder, chỉ có widget con cụ thể đó bị rebuild lại, ngăn chặn việc toàn bộ cây widget cha/màn hình phải rebuild lãng phí tài nguyên CPU/GPU và gây tụt FPS (jank).
- **Kiến thức thuộc về:** State Management Best Practices / Rebuild Scope Optimization.

---

### **Câu 5**
**Câu hỏi:** Which command builds a release APK?
- A. flutter run
- B. flutter build apk
- C. flutter doctor
- D. flutter clean

- **Đáp án:** **B. flutter build apk**
- **Giải thích chi tiết:**
  - Lệnh `flutter build apk` (mặc định với chế độ `--release`) dùng để đóng gói mã nguồn và tài nguyên thành tệp APK (Android Package) hoàn chỉnh, đã được tối ưu hóa (AOT compiled, code shrinking, tree-shaking) sẵn sàng để phát hành hoặc cài đặt trực tiếp.
  - `flutter run` dùng khi chạy debug/development; `flutter doctor` kiểm tra các công cụ cài đặt; `flutter clean` xóa thư mục `build/`.
- **Kiến thức thuộc về:** Flutter CLI Tools & Deployment / Android Release Build.

---

### **Câu 6**
**Câu hỏi:** What happens after successful login?
- A. App closes
- B. User session starts
- C. Theme changes
- D. Navigation resets

- **Đáp án:** **B. User session starts**
- **Giải thích chi tiết:**
  - Sau khi xác thực đăng nhập thành công (thông qua API/Firebase), hệ thống client bắt đầu phiên làm việc của người dùng (User session starts).
  - Ứng dụng sẽ lưu trữ token xác thực (Access Token / Refresh Token) vào bộ nhớ an toàn (Secure Storage/SharedPreferences), cập nhật trạng thái User State sang trạng thái `Authenticated` và chuyển hướng người dùng vào giao diện chính của ứng dụng.
- **Kiến thức thuộc về:** Mobile App Security & Architecture / Authentication Flow & Session Management.

---

### **Câu 7**
**Câu hỏi:** Which widget is an example of implicit animation?
- A. AnimatedContainer
- B. AnimationController
- C. Tween
- D. Ticker

- **Đáp án:** **A. AnimatedContainer**
- **Giải thích chi tiết:**
  - **Implicit Animations** (Hoạt ảnh ngầm định) là tập hợp các widget bắt đầu bằng tiền tố `Animated...` (như `AnimatedContainer`, `AnimatedOpacity`, `AnimatedPadding`, `AnimatedAlign`). Các widget này tự động xử lý animation nội suy mượt mà mỗi khi thuộc tính của chúng thay đổi mà lập trình viên **không cần** tự khởi tạo và quản lý `AnimationController`.
  - Ngược lại, `AnimationController`, `Tween`, `Ticker` là các khối kiến trúc thuộc **Explicit Animations** (hoạt ảnh tường minh), yêu cầu lập trình viên tự điều khiển thủ công.
- **Kiến thức thuộc về:** Flutter Animations / Implicit vs. Explicit Animations.

---

### **Câu 8**
**Câu hỏi:** What is the primary responsibility of the setState() method?
- A. Persist data
- B. Trigger widget rebuild
- C. Navigate screens
- D. Handle async tasks

- **Đáp án:** **B. Trigger widget rebuild**
- **Giải thích chi tiết:**
  - Trong `StatefulWidget`, phương thức `setState(VoidCallback fn)` có nhiệm vụ duy nhất: thông báo cho Flutter Framework biết rằng trạng thái nội bộ của đối tượng `State` đã thay đổi, từ đó yêu cầu framework lên lịch gọi lại phương thức `build()` để cập nhật và vẽ lại giao diện tương ứng.
- **Kiến thức thuộc về:** Flutter Core Fundamentals / StatefulWidget & State Lifecycle.

---

### **Câu 9**
**Câu hỏi:** Why is clean architecture beneficial?
- A. Fewer files
- B. Easier maintenance and testing
- C. Better UI
- D. Faster builds

- **Đáp án:** **B. Easier maintenance and testing**
- **Giải thích chi tiết:**
  - Clean Architecture phân chia hệ thống thành các layer độc lập có ranh giới rõ ràng: **Presentation** (UI & State), **Domain** (UseCases & Entities - không phụ thuộc framework), và **Data** (Repositories, Data Sources, Models).
  - Lợi ích lớn nhất là tính độc lập (Decoupling): logic nghiệp vụ được bảo vệ khỏi sự thay đổi của thư viện bên ngoài, dễ dàng viết Unit Test (bằng Mocking) và dễ bảo trì, mở rộng ứng dụng trong dài hạn.
- **Kiến thức thuộc về:** Software Architecture / Clean Architecture in Mobile Apps.

---

### **Câu 10**
**Câu hỏi:** What is Dart primarily designed for in the Flutter ecosystem?
- A. Database management
- B. User interface development
- C. General-purpose programming with UI focus
- D. Network security

- **Đáp án:** **C. General-purpose programming with UI focus**
- **Giải thích chi tiết:**
  - Dart là ngôn ngữ lập trình hướng đối tượng đa năng (general-purpose), nhưng trong hệ sinh thái Flutter, nó được tối ưu hóa chuyên biệt cho việc phát triển giao diện người dùng (UI-focused client development).
  - Dart có các đặc điểm nổi bật phục vụ UI như cú pháp declarative rõ ràng, collection if/for, garbage collector tối ưu cho việc tạo/hủy hàng triệu widget ngắn hạn (generational GC), cùng hệ thống biên dịch kép JIT (Just-In-Time) cho Hot Reload và AOT (Ahead-Of-Time) cho Native Machine Code.
- **Kiến thức thuộc về:** Dart Fundamentals & Architecture.

---

### **Câu 11**
**Câu hỏi:** What does the build() method return in a widget?
- A. A screen
- B. A widget tree describing the UI
- C. Application state
- D. Rendered pixels

- **Đáp án:** **B. A widget tree describing the UI**
- **Giải thích chi tiết:**
  - Phương thức `Widget build(BuildContext context)` trả về một widget hoặc một cấu trúc cây widget con (Widget tree) mô tả giao diện tương ứng với cấu hình và trạng thái tại thời điểm đó.
  - Lưu ý: Widget chỉ là bản mô tả (description/configuration), nó không trực tiếp chứa các pixel render (RenderObject mới là nơi tính toán layout và vẽ pixel).
- **Kiến thức thuộc về:** Flutter Fundamentals / Widget Build Mechanism.

---

### **Câu 12**
**Câu hỏi:** Which Flutter test focuses on UI components?
- A. Unit test
- B. Widget test
- C. Integration test
- D. Load test

- **Đáp án:** **B. Widget test**
- **Giải thích chi tiết:**
  - **Widget Test** (hay Component Test, sử dụng hàm `testWidgets` và `WidgetTester`) tập trung kiểm thử độc lập một hoặc một nhóm widget giao diện: kiểm tra widget có hiển thị đúng text, hình ảnh không, và phản hồi chính xác khi người dùng thực hiện các thao tác (tap, scroll, enter text) trong môi trường test mô phỏng mà không cần chạy toàn bộ ứng dụng trên thiết bị thật.
- **Kiến thức thuộc về:** Software Testing in Flutter / Widget Testing.

---

### **Câu 13**
**Câu hỏi:** What causes unnecessary widget rebuilds?
- A. State changes
- B. Overusing setState()
- C. Using Provider
- D. Using const widgets

- **Đáp án:** **B. Overusing setState()**
- **Giải thích chi tiết:**
  - Lạm dụng gọi `setState()` quá thường xuyên hoặc gọi `setState()` ở cấp độ widget cha bao phủ toàn bộ màn hình sẽ khiến cả cây widget con bên dưới bị rebuild lại dù dữ liệu của chúng không thay đổi.
  - Sử dụng `const widgets` và các giải pháp quản lý trạng thái có chọn lọc (như Selector/Consumer trong Provider/Bloc) là giải pháp để khắc phục vấn đề này.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Rebuild Issues & `setState()`.

---

### **Câu 14**
**Câu hỏi:** What happens if a non-nullable variable is not initialized in Dart?
- A. The app runs normally
- B. A runtime exception occurs
- C. A compile-time error occurs
- D. The value becomes null automatically

- **Đáp án:** **C. A compile-time error occurs**
- **Giải thích chi tiết:**
  - Hệ thống Sound Null Safety của Dart đảm bảo rằng các biến non-nullable (ví dụ: `int x;` hoặc `String name;`) không bao giờ có thể mang giá trị `null`. Do đó, nếu biến không được khởi tạo giá trị trước khi sử dụng, trình biên dịch sẽ chặn lại và báo lỗi biên dịch (Compile-time error) ngay lập tức.
- **Kiến thức thuộc về:** Dart Programming / Sound Null Safety.

---

### **Câu 15**
**Câu hỏi:** Why is separating UI and state logic recommended?
- A. Reduce code size
- B. Improve maintainability
- C. Faster execution
- D. Better animations

- **Đáp án:** **B. Improve maintainability**
- **Giải thích chi tiết:**
  - Phân tách độc lập giữa tầng hiển thị giao diện (UI) và tầng quản lý trạng thái/logic nghiệp vụ (State/Business Logic) tuân thủ nguyên lý *Separation of Concerns (SoC)*.
  - Điều này giúp code gọn gàng, giảm thiểu sự phụ thuộc lẫn nhau (loose coupling), dễ dàng sửa lỗi, bảo trì, thay đổi giao diện mà không ảnh hưởng logic và thuận tiện cho việc viết unit test độc lập cho logic.
- **Kiến thức thuộc về:** Software Engineering Principles / Separation of Concerns.

---

### **Câu 16**
**Câu hỏi:** Why should architecture be decided early?
- A. Avoid UI work
- B. Reduce refactoring cost
- C. Improve animations
- D. Change theme

- **Đáp án:** **B. Reduce refactoring cost**
- **Giải thích chi tiết:**
  - Việc lựa chọn và thống nhất cấu trúc kiến trúc (như Clean Architecture, Layered, BLoC, MVVM) ngay từ giai đoạn đầu dự án giúp định hình chuẩn mực viết code và tổ chức thư mục rõ ràng.
  - Nếu không có kiến trúc từ đầu, khi ứng dụng phình to, việc code chồng chéo "spaghetti" sẽ khiến chi phí và rủi ro khi phải tái cấu trúc (refactoring) trở nên vô cùng tốn kém và dễ gây lỗi hệ thống.
- **Kiến thức thuộc về:** Software Architecture & Project Planning.

---

### **Câu 17**
**Câu hỏi:** What does golden testing verify?
- A. API responses
- B. UI appearance consistency
- C. Database state
- D. Authentication

- **Đáp án:** **B. UI appearance consistency**
- **Giải thích chi tiết:**
  - **Golden Test** (Golden Image Testing) là kỹ thuật kiểm thử giao diện tự động bằng cách render widget thành hình ảnh pixel và so sánh trực tiếp với một hình ảnh mẫu chuẩn (gọi là "golden file").
  - Mục đích là để kiểm tra và đảm bảo tính nhất quán trực quan của UI (UI appearance consistency), phát hiện ngay các lỗi vỡ layout, sai font chữ, sai màu sắc hoặc sai khoảng cách ngoài ý muốn (Visual Regression).
- **Kiến thức thuộc về:** Flutter Testing / Golden Image Testing & UI Verification.

---

### **Câu 18**
**Câu hỏi:** Which Flutter tool helps debug network requests?
- A. DevTools
- B. Inspector
- C. Emulator
- D. Hot reload

- **Đáp án:** **A. DevTools**
- **Giải thích chi tiết:**
  - **Flutter DevTools** là bộ công cụ phân tích và chẩn đoán toàn diện chạy trên nền web. Trong đó, tab **Network Profiler** cho phép lập trình viên theo dõi chi tiết toàn bộ các kết nối HTTP, HTTPS, WebSockets (xem request URL, headers, body, response, status code, và thời gian trễ).
  - Lưu ý: Flutter Inspector là một công cụ nằm trong DevTools nhưng chuyên dùng để soi cây widget (Widget Tree), không phải để debug network.
- **Kiến thức thuộc về:** Flutter Diagnostics & Tooling / DevTools Network Profiler.

---

### **Câu 19**
**Câu hỏi:** Which platforms can Flutter applications target using a single codebase?
- A. Android only
- B. iOS only
- C. Android, iOS, web, and desktop
- D. Web servers only

- **Đáp án:** **C. Android, iOS, web, and desktop**
- **Giải thích chi tiết:**
  - Flutter hỗ trợ phát triển đa nền tảng toàn diện từ một codebase duy nhất bao gồm: các nền tảng di động (**Android, iOS**), nền tảng web (**Web browsers**), và các nền tảng máy tính để bàn (**Windows, macOS, Linux**).
- **Kiến thức thuộc về:** Flutter Multi-Platform Architecture.

---

### **Câu 20**
**Câu hỏi:** Which widget reacts to async data from local storage?
- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Provider

- **Đáp án:** **A. FutureBuilder**
- **Giải thích chi tiết:**
  - Các thao tác đọc dữ liệu từ local storage (như SQLite `sqflite.query()`, SharedPreferences `prefs.getString()`) là các tác vụ bất đồng bộ trả về một `Future<T>`.
  - `FutureBuilder` nhận vào một `Future` và tự động cập nhật UI theo các snapshot của tác vụ (`ConnectionState.waiting`, `hasError`, `hasData`).
- **Kiến thức thuộc về:** Local Storage & Asynchronous UI / `FutureBuilder`.

---

### **Câu 21**
**Câu hỏi:** Why are widgets lightweight in Flutter?
- A. They manage system resources
- B. They are immutable descriptions
- C. They store UI state
- D. They handle rendering directly

- **Đáp án:** **B. They are immutable descriptions**
- **Giải thích chi tiết:**
  - Trong kiến trúc 3 cây của Flutter (Widget Tree - Element Tree - RenderObject Tree), Widget chỉ là những cấu hình bất biến (immutable configuration objects).
  - Chúng không chứa các tài nguyên native nặng nề và không trực tiếp thực hiện tính toán layout hay vẽ pixel. Chi phí cấp phát bộ nhớ cho widget rất thấp, cho phép Flutter thoải mái khởi tạo và hủy hàng nghìn widget trong mỗi khung hình mà không làm giảm hiệu năng.
- **Kiến thức thuộc về:** Flutter Architecture / Widget Tree & Immutability.

---

### **Câu 22**
**Câu hỏi:** What problem does state hoisting address?
- A. API delay
- B. State duplication
- C. Theme conflict
- D. Navigation error

- **Đáp án:** **B. State duplication**
- **Giải thích chi tiết:**
  - **State Hoisting** (Nâng state lên cấp cao hơn) là mô hình chuyển việc lưu trữ và quản lý state từ các widget con lên widget cha chung (lowest common ancestor).
  - Kỹ thuật này giải quyết vấn đề trùng lặp trạng thái (State duplication), biến các widget con thành các widget phi trạng thái (stateless/controlled widgets), đảm bảo chỉ có một nguồn chân lý duy nhất (Single Source of Truth) cho dữ liệu.
- **Kiến thức thuộc về:** State Management Concepts / State Hoisting & Unidirectional Data Flow.

---

### **Câu 23**
**Câu hỏi:** What happens when setState() is called in a StatefulWidget?
- A. The app restarts
- B. The widget tree is rebuilt
- C. Data is saved permanently
- D. Navigation occurs

- **Đáp án:** **B. The widget tree is rebuilt**
- **Giải thích chi tiết:**
  - Khi `setState()` được gọi, Flutter đánh dấu đối tượng `Element` tương ứng là "dirty" và lên lịch cho framework gọi lại phương thức `build()` của widget đó trong frame vẽ tiếp theo, tái tạo lại cây widget con để hiển thị trạng thái mới.
- **Kiến thức thuộc về:** Flutter Fundamentals / StatefulWidget & Rebuild Mechanism.

---

### **Câu 24**
**Câu hỏi:** Which pattern is commonly used for scalable state management?
- A. MVC
- B. BLoC
- C. Singleton
- D. Factory

- **Đáp án:** **B. BLoC**
- **Giải thích chi tiết:**
  - **BLoC (Business Logic Component)** là pattern quản lý trạng thái tiêu chuẩn được thiết kế đặc biệt cho các ứng dụng Flutter quy mô lớn (enterprise/scalable).
  - BLoC phân tách hoàn toàn tầng Business Logic ra khỏi tầng UI thông qua cơ chế luồng Reactive Streams (Events vào - States ra), giúp code dễ mở rộng, dễ tái sử dụng và cực kỳ thuận tiện cho việc kiểm thử tự động.
- **Kiến thức thuộc về:** Flutter State Management / BLoC Pattern.

---

### **Câu 25**
**Câu hỏi:** Which input type improves user experience for emails?
- A. TextInputType.number
- B. TextInputType.emailAddress
- C. TextInputType.text
- D. TextInputType.url

- **Đáp án:** **B. TextInputType.emailAddress**
- **Giải thích chi tiết:**
  - Thiết lập `keyboardType: TextInputType.emailAddress` trong `TextField` sẽ yêu cầu bàn phím ảo của hệ điều hành (Android/iOS) hiển thị bố cục bàn phím tối ưu cho việc nhập email (có sẵn phím `@`, dấu chấm `.`, và gợi ý tên miền), giúp nâng cao trải nghiệm người dùng (UX).
- **Kiến thức thuộc về:** Flutter Forms & UX / `TextInputType` Configuration.

---

### **Câu 26**
**Câu hỏi:** Which widget allows both scrolling and app bars to interact?
- A. ListView
- B. CustomScrollView
- C. GridView
- D. Stack

- **Đáp án:** **B. CustomScrollView**
- **Giải thích chi tiết:**
  - `CustomScrollView` cho phép lồng ghép và tương tác đồng bộ giữa thanh tiêu đề `SliverAppBar` và các danh sách cuộn dạng sliver (`SliverList`, `SliverGrid`). Khi người dùng cuộn danh sách, `SliverAppBar` có thể co giãn, ẩn hiện hoặc ghim một cách mượt mà theo cử chỉ cuộn.
- **Kiến thức thuộc về:** Flutter UI / CustomScrollView & Slivers Interaction.

---

### **Câu 27**
**Câu hỏi:** Which method resets all form fields?
- A. clear()
- B. reset()
- C. dispose()
- D. remove()

- **Đáp án:** **B. reset()**
- **Giải thích chi tiết:**
  - Gọi `_formKey.currentState?.reset()` (phương thức `reset()` của `FormState`) sẽ khôi phục lại tất cả các trường `FormField` bên trong Form về giá trị ban đầu (`initialValue`) được khai báo và đồng thời xóa bỏ toàn bộ các thông báo lỗi kiểm tra hợp lệ (validation errors) đang hiển thị.
- **Kiến thức thuộc về:** Flutter Form Handling / `FormState.reset()`.

---

### **Câu 28**
**Câu hỏi:** Why is secure authentication critical in mobile apps?
- A. UI quality
- B. Protect user data
- C. Reduce code
- D. Improve speed

- **Đáp án:** **B. Protect user data**
- **Giải thích chi tiết:**
  - Xác thực an toàn (Secure Authentication) là bức tường phòng thủ cốt lõi để bảo vệ dữ liệu nhạy cảm của người dùng (thông tin cá nhân, tài chính, token truy cập) khỏi các nguy cơ tấn công đánh cắp dữ liệu, giả mạo danh tính hoặc truy cập trái phép qua mạng.
- **Kiến thức thuộc về:** Mobile Application Security / Authentication.

---

### **Câu 29**
**Câu hỏi:** Which HTTP method is used to send new data to a server?
- A. GET
- B. DELETE
- C. POST
- D. HEAD

- **Đáp án:** **C. POST**
- **Giải thích chi tiết:**
  - Trong chuẩn RESTful API và giao thức HTTP, phương thức `POST` được sử dụng để gửi dữ liệu mới (payload trong Request Body) lên máy chủ nhằm tạo mới một tài nguyên (ví dụ: tạo tài khoản mới, tạo đơn hàng mới).
  - `GET` dùng để lấy dữ liệu; `DELETE` dùng để xóa tài nguyên; `HEAD` dùng để lấy header phản hồi.
- **Kiến thức thuộc về:** Networking & RESTful APIs / HTTP Methods.

---

### **Câu 30**
**Câu hỏi:** What is the main goal of performance optimization in Flutter apps?
- A. Improve UI colors
- B. Ensure smooth and responsive UI
- C. Reduce code size
- D. Add features

- **Đáp án:** **B. Ensure smooth and responsive UI**
- **Giải thích chi tiết:**
  - Mục tiêu tối thượng của việc tối ưu hóa hiệu năng (Performance Optimization) trong ứng dụng Flutter là duy trì tốc độ khung hình ổn định ở mức **60 FPS hoặc 120 FPS** (16.6ms hoặc 8.3ms mỗi frame), loại bỏ hiện tượng giật khung hình (jank), đảm bảo giao diện luôn phản hồi tức thì và mượt mà trước mọi tương tác của người dùng.
- **Kiến thức thuộc về:** Flutter Performance Optimization / Frame Rate & UI Responsiveness.

---

### **Câu 31**
**Câu hỏi:** Which widget pattern protects authenticated routes?
- A. Navigator
- B. Guard
- C. Route protection
- D. Middleware

- **Đáp án:** **B. Guard**
- **Giải thích chi tiết:**
  - Pattern **Route Guard** (hoặc Guard) đóng vai trò như một bộ kiểm soát chặn các tuyến điều hướng. Khi người dùng cố gắng truy cập vào một route yêu cầu đăng nhập, Guard sẽ kiểm tra trạng thái xác thực: nếu đã đăng nhập thì cho phép hiển thị, nếu chưa thì chuyển hướng (redirect) về trang Login.
- **Kiến thức thuộc về:** Flutter Routing & Security / Route Guard Pattern.

---

### **Câu 32**
**Câu hỏi:** What does the final keyword indicate in Dart?
- A. The variable can be reassigned later
- B. The variable value is fixed after assignment
- C. The variable is global
- D. The variable is private

- **Đáp án:** **B. The variable value is fixed after assignment**
- **Giải thích chi tiết:**
  - Trong Dart, từ khóa `final` khai báo một biến "chỉ gán một lần" (single-assignment). Giá trị của biến `final` có thể được tính toán và gán tại thời điểm Runtime (ví dụ từ kết quả API hay hàm khởi tạo), nhưng một khi đã được gán thì giá trị của nó sẽ cố định và không thể bị gán lại (reassigned).
- **Kiến thức thuộc về:** Dart Fundamentals / Variables & Immutability (`final` keyword).

---

### **Câu 33**
**Câu hỏi:** What does status code 200 indicate?
- A. Client error
- B. Server error
- C. Success
- D. Redirect

- **Đáp án:** **C. Success**
- **Giải thích chi tiết:**
  - Trong chuẩn HTTP Response Status Codes, mã **200 OK** thuộc dải `2xx` (Success), biểu thị rằng yêu cầu từ phía client gửi lên máy chủ đã được tiếp nhận, hiểu và xử lý thành công.
- **Kiến thức thuộc về:** Networking Protocols / HTTP Status Codes.

---

### **Câu 34**
**Câu hỏi:** Why is immutability important in BLoC states?
- A. UI speed
- B. Predictable state changes
- C. Memory usage
- D. Theme control

- **Đáp án:** **B. Predictable state changes**
- **Giải thích chi tiết:**
  - Tính bất biến (Immutability) đảm bảo các instance của State không bị chỉnh sửa ngầm (side-effects). Mỗi khi có trạng thái mới, một đối tượng State hoàn toàn mới được phát ra.
  - Điều này giúp luồng dữ liệu trở nên có thể dự đoán được (predictable), hỗ trợ debug dễ dàng (Time-travel debugging) và cho phép các widget như `BlocBuilder` so sánh sự khác biệt trạng thái (`oldState != newState` thông qua `Equatable`) để quyết định có cần rebuild lại giao diện hay không.
- **Kiến thức thuộc về:** State Management / BLoC Pattern & State Immutability.

---

### **Câu 35**
**Câu hỏi:** What does crossAxisAlignment control?
- A. Vertical alignment in Column
- B. Horizontal alignment in Column
- C. Child order
- D. Widget size

- **Đáp án:** **B. Horizontal alignment in Column**
- **Giải thích chi tiết:**
  - Trong Flex layout của Flutter:
    - Đối với `Column`: Trục chính (**Main Axis**) là trục dọc (Vertical), trục phụ (**Cross Axis**) là trục ngang (Horizontal). Do đó, `crossAxisAlignment` điều khiển cách căn chỉnh các widget con theo **chiều ngang** (ví dụ: `CrossAxisAlignment.start`, `center`, `end`, `stretch`).
    - Đối với `Row`: Ngược lại, Cross Axis là trục dọc.
- **Kiến thức thuộc về:** Flutter UI Layout / Flex Alignment (`Column` & `Row`).

---

### **Câu 36**
**Câu hỏi:** What is the role of v-sync in Flutter?
- A. Sync data
- B. Optimize animation resources
- C. Control layout
- D. Handle navigation

- **Đáp án:** **B. Optimize animation resources**
- **Giải thích chi tiết:**
  - **V-Sync (Vertical Synchronization)** trong Flutter (được cung cấp thông qua mixin `SingleTickerProviderStateMixin` hoặc `TickerProviderStateMixin`) có vai trò đồng bộ hóa nhịp của Animation Controller với tần số quét làm mới của màn hình phần cứng (thường là 60Hz hoặc 120Hz).
  - Nhờ V-Sync, animation chỉ tính toán và kích hoạt vẽ lại khi màn hình thực sự sẵn sàng render một khung hình mới, và tự động tạm dừng khi widget ra khỏi màn hình, giúp tiết kiệm tối đa pin và tài nguyên CPU/GPU.
- **Kiến thức thuộc về:** Flutter Animations / Ticker & V-Sync Optimization.

---

### **Câu 37**
**Câu hỏi:** What is the main goal of testing in Flutter apps?
- A. Improve UI design
- B. Ensure app quality and correctness
- C. Speed up builds
- D. Manage state

- **Đáp án:** **B. Ensure app quality and correctness**
- **Giải thích chi tiết:**
  - Mục tiêu cốt lõi của việc thực hiện kiểm thử tự động (Unit, Widget, Integration Testing) trong phát triển ứng dụng là đảm bảo chất lượng phần mềm, xác nhận ứng dụng hoạt động chính xác theo yêu cầu thiết kế, ngăn chặn lỗi hồi quy (regressions) khi cập nhật tính năng mới.
- **Kiến thức thuộc về:** Software Engineering / Software Quality Assurance & Testing.

---

### **Câu 38**
**Câu hỏi:** Why is understanding the widget lifecycle important?
- A. Improve API performance
- B. Manage UI updates correctly
- C. Deploy apps faster
- D. Reduce file size

- **Đáp án:** **B. Manage UI updates correctly**
- **Giải thích chi tiết:**
  - Hiểu rõ vòng đời của Widget (`initState`, `didChangeDependencies`, `build`, `didUpdateWidget`, `dispose`...) giúp lập trình viên thực hiện các thao tác đúng thời điểm: khởi tạo controller/listener trong `initState`, giải phóng tài nguyên trong `dispose`, và kích hoạt cập nhật giao diện (`setState`) chính xác mà không gặp lỗi "setState called after dispose" hay rò rỉ bộ nhớ.
- **Kiến thức thuộc về:** Flutter Core / State Lifecycle Management.

---

### **Câu 39**
**Câu hỏi:** Why are forms important in mobile applications?
- A. UI decoration
- B. User data collection
- C. State management
- D. Navigation

- **Đáp án:** **B. User data collection**
- **Giải thích chi tiết:**
  - Form (biểu mẫu nhập liệu) là cầu nối tương tác chính để ứng dụng thu thập dữ liệu đầu vào từ người dùng (như thông tin cá nhân, tìm kiếm, đăng ký tài khoản, phản hồi khảo sát) đồng thời cung cấp cơ chế kiểm tra tính hợp lệ của dữ liệu (form validation) trước khi gửi lên server.
- **Kiến thức thuộc về:** Mobile App Development & Flutter Forms / User Input.

---

### **Câu 40**
**Câu hỏi:** Which Flutter plugin provides SQLite support?
- A. hive
- B. moor
- C. sqflite
- D. shared_preferences

- **Đáp án:** **C. sqflite**
- **Giải thích chi tiết:**
  - `sqflite` là plugin chính thức được sử dụng rộng rãi nhất để làm việc với cơ sở dữ liệu quan hệ cục bộ SQLite trong ứng dụng Flutter, hỗ trợ đầy đủ các câu lệnh SQL thuần, CRUD operations, transactions và migration cơ sở dữ liệu.
- **Kiến thức thuộc về:** Local Data Storage / Relational Database with SQLite (`sqflite`).

---

### **Câu 41**
**Câu hỏi:** When is it most appropriate to customize themes in a Flutter app?
- A. After API integration
- B. During UI/UX design phase
- C. Only at deployment
- D. Only for testing

- **Đáp án:** **B. During UI/UX design phase**
- **Giải thích chi tiết:**
  - Tùy biến và thiết lập Theme (`ThemeData`, ColorScheme, Typography) nên được thực hiện sớm ngay trong giai đoạn thiết kế UI/UX và xây dựng nền tảng ban đầu. Việc này giúp toàn bộ các màn hình và widget được xây dựng sau đó tự động kế thừa màu sắc và phong cách chuẩn mực, tránh phải sửa lại giao diện thủ công từng màn hình về sau.
- **Kiến thức thuộc về:** Flutter UI Design / Design System & Theming Workflow.

---

### **Câu 42**
**Câu hỏi:** Which HTTP header is commonly used for authorization?
- A. Content-Type
- B. Accept
- C. Authorization
- D. Cache-Control

- **Đáp án:** **C. Authorization**
- **Giải thích chi tiết:**
  - Header `Authorization` là tiêu chuẩn HTTP được sử dụng để truyền các thông tin xác thực/ủy quyền từ client tới máy chủ, phổ biến nhất là cơ chế Bearer Token: `Authorization: Bearer <access_token>`.
- **Kiến thức thuộc về:** Networking & Security / HTTP Headers & Token Authentication.

---

### **Câu 43**
**Câu hỏi:** Why is passing context important in navigation?
- A. Access theme
- B. Access Navigator
- C. Access state
- D. Access layout

- **Đáp án:** **B. Access Navigator**
- **Giải thích chi tiết:**
  - `BuildContext` định vị vị trí của widget trong cây widget. Khi thực hiện điều hướng với `Navigator.of(context)` hoặc `Navigator.push(context, ...)`, Flutter cần `context` để tìm kiếm đối tượng `NavigatorState` gần nhất trong cây widget tổ tiên quản lý ngăn xếp màn hình (Route Stack).
- **Kiến thức thuộc về:** Flutter Navigation & Routing / BuildContext in Navigation.

---

### **Câu 44**
**Câu hỏi:** What is the main benefit of Flutter's widget-based architecture?
- A. Widgets are only used for layout design
- B. Widgets allow code reuse across platforms
- C. Widgets automatically manage databases
- D. Widgets replace backend services

- **Đáp án:** **B. Widgets allow code reuse across platforms**
- **Giải thích chi tiết:**
  - Triết lý "Everything is a Widget" của Flutter tạo ra tính module hóa cực cao. Các widget có thể được tái sử dụng linh hoạt giữa các màn hình và đặc biệt là có thể chạy nhất quán trên mọi nền tảng (Android, iOS, Web, Desktop) mà không cần viết lại logic giao diện.
- **Kiến thức thuộc về:** Flutter Core Architecture / Widget Composition & Reusability.

---

### **Câu 45**
**Câu hỏi:** Which Dart data structure is best suited for storing an ordered collection of items?
- A. Set
- B. Map
- C. List
- D. Queue

- **Đáp án:** **C. List**
- **Giải thích chi tiết:**
  - `List` (danh sách / mảng) trong Dart là cấu trúc dữ liệu lưu trữ một tập hợp các phần tử có thứ tự (ordered collection), cho phép các phần tử trùng lặp và hỗ trợ truy cập phần tử qua chỉ mục (index 0, 1, 2...).
  - `Set` là tập hợp không có thứ tự và không chứa phần tử trùng lặp; `Map` là tập hợp các cặp key-value.
- **Kiến thức thuộc về:** Dart Collections / List Data Structure.

---

### **Câu 46**
**Câu hỏi:** Which Flutter widget reacts to authentication state changes?
- A. FutureBuilder
- B. StreamBuilder
- C. ListView
- D. Form

- **Đáp án:** **B. StreamBuilder**
- **Giải thích chi tiết:**
  - Luồng trạng thái xác thực người dùng (như đăng nhập, đăng xuất, hết hạn session) là một luồng sự kiện liên tục theo thời gian thực (`Stream<User?>`).
  - `StreamBuilder` là widget được thiết kế để lắng nghe `Stream` này và tự động rebuild chuyển đổi giữa màn hình đăng nhập (Auth Screen) và màn hình chính (Home Screen) ngay khi có sự thay đổi.
- **Kiến thức thuộc về:** Asynchronous UI Programming / `StreamBuilder` & Authentication State Flow.

---

### **Câu 47**
**Câu hỏi:** Which widget rebuilds automatically during animation?
- A. AnimatedBuilder
- B. FutureBuilder
- C. StreamBuilder
- D. LayoutBuilder

- **Đáp án:** **A. AnimatedBuilder**
- **Giải thích chi tiết:**
  - `AnimatedBuilder` nhận vào một `animation` (thường là `AnimationController` hoặc `CurvedAnimation`) đóng vai trò là `Listenable`. Mỗi khi giá trị animation thay đổi theo từng frame, `AnimatedBuilder` sẽ tự động gọi hàm `builder` để render lại phần giao diện chuyển động mà không cần phải gọi `setState()` ở toàn bộ widget cha.
- **Kiến thức thuộc về:** Flutter Animations / Explicit Animations & `AnimatedBuilder`.

---

### **Câu 48**
**Câu hỏi:** What is the main purpose of the Container widget?
- A. Navigation
- B. Layout, styling, and positioning
- C. State management
- D. Network requests

- **Đáp án:** **B. Layout, styling, and positioning**
- **Giải thích chi tiết:**
  - `Container` là một widget tiện ích đa năng kết hợp nhiều widget đơn lẻ lại với nhau, cung cấp các thuộc tính để xử lý kích thước (width/height), khoảng cách (padding/margin), trang trí giao diện (decoration: màu nền, viền border, bo góc borderRadius, bóng đổ boxShadow), căn chỉnh (alignment) và biến đổi hình học (transform).
- **Kiến thức thuộc về:** Flutter UI Layout & Styling / `Container` Widget.

---

### **Câu 49**
**Câu hỏi:** Which step is required before running a Flutter app for the first time?
- A. Publishing the app
- B. Setting up the Flutter SDK
- C. Configuring a database
- D. Writing backend APIs

- **Đáp án:** **B. Setting up the Flutter SDK**
- **Giải thích chi tiết:**
  - Để có thể biên dịch, chạy lệnh và khởi chạy ứng dụng Flutter lần đầu tiên, lập trình viên bắt buộc phải tải về, giải nén và cấu hình đường dẫn môi trường (Environment Variables) cho **Flutter SDK** trên máy tính.
- **Kiến thức thuộc về:** Flutter Environment Setup / SDK Installation & Configuration.

---

### **Câu 50**
**Câu hỏi:** Which practice improves API security?
- A. Hardcoding keys
- B. Using HTTPS
- C. Ignoring errors
- D. Using globals

- **Đáp án:** **B. Using HTTPS**
- **Giải thích chi tiết:**
  - Sử dụng giao thức **HTTPS (Hypertext Transfer Protocol Secure)** với mã hóa SSL/TLS giúp mã hóa toàn bộ dữ liệu trao đổi giữa ứng dụng di động và máy chủ (API Server), ngăn chặn các cuộc tấn công nghe lén (Eavesdropping), đánh cắp dữ liệu và tấn công trung gian (Man-in-the-Middle - MitM).
- **Kiến thức thuộc về:** Mobile Network Security / HTTPS & API Communication Security.
