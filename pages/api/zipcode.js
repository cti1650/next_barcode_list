// /src/app/pages/api/user.ts
export default async(req, res) => {
    // 外部APIを呼び出し
    const response = await fetch("http://zipcloud.ibsnet.co.jp/api/search?zipcode=2500011");
    const data = await response.json();
    res.status(200).json(data);
}