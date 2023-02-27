# Chủ đề : Xây dựng một Website để học code

## I. Mở đầu

### 1. Giới thiệu đề tài

-   Lập trình hướng đối tượng là phần kiến thức quan trọng trong lập trình nhưng để hiểu rõ và nắm bắt thì còn khá khó nhất là các bạn mới.
-   Nên em lên ý tượng xây dựng một website về các bài học lập trình hướng đối tượng với ngôn ngữ lập trình cụ thể là java. Website được lấy kiến thức và thiết kế theo [codelearn](https://codelearn.io)

### 2. Mục tiêu đề tài

-   Xây dựng website về các bài học lập trình với ngôn ngữ cụ thể là java với 70 bài học chia làm 7 phần bao gồm phần quiz ở cuối
-   Trong mỗi bài học có 2 phần là phần kiến thức đọc và phần thực hành (phần thực hành có thể là trắc nghiệm hoặc là thực hành code trực tiếp trên đó)

### 3. Công nghệ sử dụng

-   Font-end : Sử dụng ngôn ngữ lập trình ReactJs và các thư viện khác như Clsx, reac-ace : để edit code trực tiếp trên Web, ace-build để sử dụng làm IDE
-   Back-end : Sử dụng ngôn ngữ NodeJs (để lấy dữ liệu các bài học từ database trả về cho phía client để render và khi Client submit code ở phần thực hành thì sử dụng thư viện compilex để biên dịch và trả quả hoặc lỗi cho phía client)
-   Database : Sử dụng mongodb (ở back-end sử dụng mongoose làm phần trung gian giao tiếp giữa node và database)

## II. Thực Hiện

### 1. Cài đặt các thư viện cần sử dụng

    "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "ace-builds": "^1.15.2",
        "axios": "^1.3.2",
        "es6-shim": "^0.35.7",
        "json-server": "^0.17.1",
        "normalize.css": "^8.0.1",
        "react": "^18.2.0",
        "react-ace": "^10.1.0",
        "react-app-rewired": "5.0.1",
        "react-dom": "^18.2.0",
        "react-icons": "^4.7.1",
        "react-router-dom": "^6.6.2",
        "sass": "^1.57.1",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-app-rewired eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "devDependencies": {
        "babel-plugin-module-resolver": "^5.0.0",
        "clsx": "^1.2.1",
        "compile-run": "^2.3.4",
        "customize-cra": "^1.0.0",
        "react-app-rewired": "^2.2.1"
    },
    "proxy": "http://localhost:3000/"

### 2. Chia layout và component

-   Xây dựng các layout chung cho các trang và các component

### 3. Xây dựng chi tiết và reponsive

-   Viết chi tiết cho các bài học và làm reponsive để phù hợp với các thiết bị khác nhau

## III. Tổng kết

### 1. Quá trình thực hiện

-   Buổi 1: Tìm hiểu chủ đề và nêu ra các chức năng của website
-   Buổi 2: Tìm hiểu về HTML, CSS, JS
-   Buổi 3: Học ReacJS, NodeJS
-   Buổi 4: Dựng layout website
-   Buổi 5 : Làm về phần đọc và login
-   Buổi 6: Làm về IDE, submit code
-   Buổi 7 : Làm reposive website

### 2. Kết quả đạt được

-   Hoàn thành được gần hết các mục tiêu ban đầu đề ra
-   Khi submit code nếu chương trình bình thường sẽ trả về kết quả còn nếu chương trình nếu thì sẽ trả về message lỗi

### 3. Định hướng phát triển tiếp

-   Xây dựng thêm các khóa học về các ngôn ngữ lập trình khác
