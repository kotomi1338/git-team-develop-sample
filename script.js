// 47都道府県のリストとそれぞれの説明をオブジェクト配列で定義
const prefectures = [
    { name: "北海道"},
    { name: "青森県"},
    { name: "岩手県"},
    { name: "宮城県"},
    { name: "秋田県"},
    { name: "山形県"},
    { name: "福島県"},
];

// ガチャを回す関数
function spinGacha() {
    // ランダムに都道府県を選択
    const randomIndex = Math.floor(Math.random() * prefectures.length);
    const selectedPrefecture = prefectures[randomIndex];

    // 結果を画面に表示
    const resultDiv = document.getElementById("result");
    const selectedPrefectureDiv = document.getElementById("selected-prefecture");

    selectedPrefectureDiv.textContent = `選ばれた都道府県は: ${selectedPrefecture.name}`;
    descriptionDiv.textContent = selectedPrefecture.description;
} 
