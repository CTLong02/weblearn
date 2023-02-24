import { Introduction } from '~/Pages/introduction';
import { Learn } from '~/Pages/learn';
import { Help } from '~/Pages/help';
import { More } from '~/Pages/more';
import { SignIn } from '~/Pages/login';
import { Register } from '~/Pages/login';
import Lesson1 from '~/Pages/lessons/Lesson1';
import Lesson2 from '~/Pages/lessons/Lesson2';
import Lesson3 from '~/Pages/lessons/Lesson3';
import Lesson4 from '~/Pages/lessons/Lesson4';
import Lesson5 from '~/Pages/lessons/Lesson5';
import Lesson6 from '~/Pages/lessons/Lesson6';
import Lesson7 from '~/Pages/lessons/Lesson7';
import Lesson8 from '~/Pages/lessons/Lesson8';
import Lesson9 from '~/Pages/lessons/Lesson9';
import Lesson10 from '~/Pages/lessons/Lesson10';
import Lesson11 from '~/Pages/lessons/Lesson11';
import Lesson12 from '~/Pages/lessons/Lesson12';
import Lesson13 from '~/Pages/lessons/Lesson13';
import Lesson14 from '~/Pages/lessons/Lesson14';
import Lesson15 from '~/Pages/lessons/Lesson15';
import Lesson16 from '~/Pages/lessons/Lesson16';
import Lesson17 from '~/Pages/lessons/Lesson17';
import Lesson18 from '~/Pages/lessons/Lesson18';
import Lesson19 from '~/Pages/lessons/Lesson19';
import Lesson20 from '~/Pages/lessons/Lesson20';
import Lesson21 from '~/Pages/lessons/Lesson21';
import Lesson22 from '~/Pages/lessons/Lesson22';
import Lesson23 from '~/Pages/lessons/Lesson23';
import Lesson24 from '~/Pages/lessons/Lesson24';
import Lesson25 from '~/Pages/lessons/Lesson25';
import Lesson26 from '~/Pages/lessons/Lesson26';
import Lesson27 from '~/Pages/lessons/Lesson27';
import Lesson28 from '~/Pages/lessons/Lesson28';
import Lesson29 from '~/Pages/lessons/Lesson29';
import Lesson30 from '~/Pages/lessons/Lesson30';
import Lesson31 from '~/Pages/lessons/Lesson31';
import Lesson32 from '~/Pages/lessons/Lesson32';
import Lesson33 from '~/Pages/lessons/Lesson33';
import Lesson34 from '~/Pages/lessons/Lesson34';
import Lesson35 from '~/Pages/lessons/Lesson35';
import Lesson52 from '~/Pages/lessons/Lesson52';
import Lesson53 from '~/Pages/lessons/Lesson53';
import Lesson54 from '~/Pages/lessons/Lesson54';
import Lesson55 from '~/Pages/lessons/Lesson55';
import Lesson56 from '~/Pages/lessons/Lesson56';
import Lesson57 from '~/Pages/lessons/Lesson57';
import Lesson58 from '~/Pages/lessons/Lesson58';
import Lesson59 from '~/Pages/lessons/Lesson59';
import Lesson60 from '~/Pages/lessons/Lesson60';
import Lesson61 from '~/Pages/lessons/Lesson61';
import Lesson62 from '~/Pages/lessons/Lesson62';
import Lesson63 from '~/Pages/lessons/Lesson63';
import Lesson64 from '~/Pages/lessons/Lesson64';
import Lesson65 from '~/Pages/lessons/Lesson65';
import Lesson66 from '~/Pages/lessons/Lesson66';
import Lesson67 from '~/Pages/lessons/Lesson67';
import Lesson68 from '~/Pages/lessons/Lesson68';
import Lesson69 from '~/Pages/lessons/Lesson69';
import Lesson70 from '~/Pages/lessons/Lesson70';

const publicRoutes = [
    { path: '/', component: Introduction },
    { path: '/learning', component: Learn },
    { path: '/help', component: Help },
    { path: '/more', component: More },
    { path: '/signin', component: SignIn },
    { path: '/register', component: Register },
    { path: '/learning/Classes and Objects/1', component: Lesson1 },
    { path: '/learning/Classes and Objects/2', component: Lesson2 },
    { path: '/learning/Classes and Objects/3', component: Lesson3 },
    { path: '/learning/Classes and Objects/4', component: Lesson4 },
    { path: '/learning/Classes and Objects/5', component: Lesson5 },
    { path: '/learning/Classes and Objects/6', component: Lesson6 },
    { path: '/learning/Classes and Objects/7', component: Lesson7 },
    { path: '/learning/Classes and Objects/8', component: Lesson8 },
    { path: '/learning/Classes and Objects/9', component: Lesson9 },
    { path: '/learning/Classes and Objects/10', component: Lesson10 },
    { path: '/learning/Classes and Objects/11', component: Lesson11 },
    { path: '/learning/Static variables and methods/12', component: Lesson12 },
    { path: '/learning/Static variables and methods/13', component: Lesson13 },
    { path: '/learning/Static variables and methods/14', component: Lesson14 },
    { path: '/learning/Static variables and methods/15', component: Lesson15 },
    { path: '/learning/Static variables and methods/16', component: Lesson16 },
    { path: '/learning/Static variables and methods/17', component: Lesson17 },
    { path: '/learning/Static variables and methods/18', component: Lesson18 },
    { path: '/learning/Static variables and methods/19', component: Lesson19 },
    { path: '/learning/Encapsulation/20', component: Lesson20 },
    { path: '/learning/Encapsulation/21', component: Lesson21 },
    { path: '/learning/Encapsulation/22', component: Lesson22 },
    { path: '/learning/Encapsulation/23', component: Lesson23 },
    { path: '/learning/Encapsulation/24', component: Lesson24 },
    { path: '/learning/Encapsulation/25', component: Lesson25 },
    { path: '/learning/Encapsulation/26', component: Lesson26 },
    { path: '/learning/Encapsulation/27', component: Lesson27 },
    { path: '/learning/Encapsulation/28', component: Lesson28 },
    { path: '/learning/Inheritance/29', component: Lesson29 },
    { path: '/learning/Inheritance/30', component: Lesson30 },
    { path: '/learning/Inheritance/31', component: Lesson31 },
    { path: '/learning/Inheritance/32', component: Lesson32 },
    { path: '/learning/Inheritance/33', component: Lesson33 },
    { path: '/learning/Inheritance/34', component: Lesson34 },
    { path: '/learning/Inheritance/35', component: Lesson35 },
    { path: '/learning/Quiz/52', component: Lesson52 },
    { path: '/learning/Quiz/53', component: Lesson53 },
    { path: '/learning/Quiz/54', component: Lesson54 },
    { path: '/learning/Quiz/55', component: Lesson55 },
    { path: '/learning/Quiz/56', component: Lesson56 },
    { path: '/learning/Quiz/57', component: Lesson57 },
    { path: '/learning/Quiz/58', component: Lesson58 },
    { path: '/learning/Quiz/59', component: Lesson59 },
    { path: '/learning/Quiz/60', component: Lesson60 },
    { path: '/learning/Quiz/61', component: Lesson61 },
    { path: '/learning/Quiz/62', component: Lesson62 },
    { path: '/learning/Quiz/63', component: Lesson63 },
    { path: '/learning/Quiz/64', component: Lesson64 },
    { path: '/learning/Quiz/65', component: Lesson65 },
    { path: '/learning/Quiz/66', component: Lesson66 },
    { path: '/learning/Quiz/67', component: Lesson67 },
    { path: '/learning/Quiz/68', component: Lesson68 },
    { path: '/learning/Quiz/69', component: Lesson69 },
    { path: '/learning/Quiz/70', component: Lesson70 },
];

const privateRooutes = {};

export { publicRoutes, privateRooutes };
