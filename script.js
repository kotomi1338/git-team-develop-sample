// 47都道府県のリストとそれぞれの説明をオブジェクト配列で定義
const prefectures = [
    { name: "北海道", description: "日本の最北端に位置する都道府県で、豊かな自然と寒冷な気候が特徴です。" },
    { name: "青森県", description: "本州の最北端に位置し、りんごの生産が有名です。" },
    { name: "岩手県", description: "広大な面積を持ち、美しい自然景観と温泉地が多く存在します。" },
    { name: "宮城県", description: "東北地方の中心で、仙台市があり、牛タンや松島が有名です。" },
    { name: "秋田県", description: "秋田犬や米どころとして知られ、美しい田園風景が広がります。" },
    { name: "山形県", description: "さくらんぼの生産が盛んで、温泉地も多い県です。" },
    { name: "福島県", description: "自然豊かなエリアと工業地帯が共存し、歴史的な温泉もあります。" },
    // 残りの都道府県についても同様に追加...
];

// ガチャを回す関数
function spinGacha() {
    // ランダムに都道府県を選択
    const randomIndex = Math.floor(Math.random() * prefectures.length);
    const selectedPrefecture = prefectures[randomIndex];

    // 結果を画面に表示
    const resultDiv = document.getElementById("result");
    const selectedPrefectureDiv = document.getElementById("selected-prefecture");
    const descriptionDiv = document.getElementById("description");

    selectedPrefectureDiv.textContent = `選ばれた都道府県は: ${selectedPrefecture.name}`;
    descriptionDiv.textContent = selectedPrefecture.description;
} 
