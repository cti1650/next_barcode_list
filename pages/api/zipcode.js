// /src/app/pages/api/user.ts
export default async(req, res) => {
    if(req.query.zipcode){
        // 外部APIを呼び出し
        const response = await fetch("http://zipcloud.ibsnet.co.jp/api/search?zipcode="+req.query.zipcode);
        const data = await response.json();
        res.status(200).json(data);
    }else{
        res.status(200).json({});
    }
}