/**
 * const,let等の変数宣言
 *
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能である
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 ="const変数"
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";

// //constは再宣言不可
// const val3 = "constを再宣言"

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'じゃけぇ',
//   age: 31,
// };
// // val4.name = 'jak';
// // val4.address = 'hiroshima';
// console.log(val4);

// // //const
// const val5 = ['dog', 'cat'];
// // val5[0]= "bird";
// // val5.push("monkey");
// console.log(val5);

// /**
// テンプレート文字列
//  */
// const name = 'あああ';
// const age = 31;

// // const message1 = '私の名前は' + name + 'です';

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function(str){

// }

// console.log(func1("func1デス"));

//アロー関数
//アロー関数の引数が一つのみの場合はカッコがいらない
//関数の中身が単一式の場合は、カッコもreturnもいらない
// const func2 = (str) => str;
// console.log(func2('func2です'));

// //オブジェクトを返す場合は、（）でくくることで単一式とすることができる
// const func3 = (num1, num2) => ({
//   hoge:num1,
//   huga:num2,
// });
// console.log(func3(10, 20));

// //分割代入
// const myProfile = {
//   name: 'うちみ',
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['うちみ', 31];
// const [name, age] = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * デフォルト値（引数、分割代入）
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const myProfile = {
//   age: 28
// };
// const {age,name = "ゲスト"} = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 */
// const name = "うちみ"
// const age = 31;

// const myProfile = {
//   name,
//   age
// };
// console.log(myProfile);

/**
 * スプレッド構文 ...
 */

//配列の展開
//⇒...を配列の前に置くことで、配列の中身を順番に取り出して、処理を実行させることができる
//　⇒何がうれしいかというと、複数引数を要求している関数に配列を渡す際、めんどくない
// const arr1 = [1,2,3,4];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2,num3) => console.log(num1+num2+num3);
// // sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// //配列のコピー、結合
// const arr4 =[10,20];
// const arr5 = [30,40];

// //スプレッド構文による配列のコピーであれば、参照元が別になるため、片方を変えても大丈夫
// const arr6 = [...arr4];
// arr6[0]= 100;
// console.log(arr6);
// console.log(arr4);
// // const arr7 = [...arr4, ...arr5]
// console.log(arr7)

// //配列をそのまま代入すると、参照が引き継がれる（同じ場所を参照するため、片方を変えるともう片方も変わってしまう）
// const arr8 = arr4
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr8)

/**
 * mapやfilterを使った配列の処理
// */
// const nameArr = ["田中","山田","ウチウミ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// // nameArr.map((name)=>console.log(name));
// nameArr.map((name) => console.log(name));
// const nameArr2 = nameArr.map((name) => name)
// console.log(nameArr2);

// //mapはfor文を簡単にしたもの。配列操作時に便利。
// //ただ配列を配列にコピーするだけなら、スプレッド構文と変わらなそう
// const nameArr3 = [...nameArr2]
// console.log(nameArr3);
// nameArr3[0] = "佐藤";
// console.log(nameArr3);

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

//配列の要素それぞれに対して、何番目かを明示的にしたい！
//⇒mapの引数二つ目にindexを置くことで、明示的にできます
// const nameArr = ["田中","山田","ウチウミ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name,index) => console.log(`${index + 1}番目は${nameArr[index]}です。` ))

//ウチウミ以外に敬称を付けるようなコーディング
// const newNameArr = nameArr.map((name) => {
//   if(name === "ウチウミ"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 * ⇒めっちゃ簡単なif文
 */
// ある条件 ?　条件がtrueのとき：条件がfalseの時
// const val1 = 1 > 2 ? "trueです" : "falseです"
// console.log(val1)

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// }
// console.log(checkSum(60,30))

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
//truthy,falsyについて
//javascriptは暗黙的に変換される
// "ABC" 0 10 undefined null false NaN "" [] {}
// const val = 0;
// if (val){
//   console.log("valはtruthyです ");
// }else {
//   console.log("valはfalthyです");
// }

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log('1か2はtrueになります');
}
if (flag1 && flag2) {
  console.log('1も2もtrueになります');
}

// 短絡演算
// ||は"または"なので、左側がtruhyの時その時点で返却する
// ⇒左側がfalsyなら、右側まで見に行く⇒結果、"金額未設定です"が返却&実行される
const num = 0;
const fee = num || '金額未設定です';
console.log(fee);

// && は左側がfalsyのとき、その時点で返却する
// ⇒左側がtruethyなら、右側まで見に行く⇒結果、"何か設定されました"が返却＆実行される
const num2 = 'ABC';
const fee2 = num2 && '何か設定されました';
console.log(fee2);
