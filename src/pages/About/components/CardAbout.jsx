import { Image } from 'antd'
import React from 'react'

export default function CardAbout() {
  return (
    <div class="wrapper-single">
        <div class="container">
            <div class="about__post__content">
                <h2 class="text-center" >
                    <span class="text-2xl font-sans">
                        <strong>
                            <em>Cửa hàng Nông Nghiệp Hữu Cơ Sinh Học Gia Lai </em>
                        </strong>
                    </span>
                </h2>
                <h2 class="text-center" >
                    <span class="text-2xl font-sans">
                        <strong>
                            <em>xin kính chào quý khách!</em>
                        </strong>
                    </span>
                </h2>
                <p class="text-center">
                    <Image
                        style={{ borderRadius: 10 }}
                        height={344}
                        width={800}
                        src="./images/about/Thiết-kế-không-tên-2.png"
                        alt=''
                    />
                </p>
                <p class="text-center">
                    <span class="text-base">
                        <strong>
                            <em>Cửa hàng Nông Nghiệp Hữu Cơ Sinh Học Gia Lai</em>
                        </strong>
                    </span>
                </p>
                <p>
                    <span class="font-sans	text-xl">
                        Được ra đời vào cuối tháng 5/2021. Với định hướng và mục tiêu là cung cấp những sản phẩm và dịch vụ chuyên về sản xuất Nông Nghiệp Sạch, Nông Nghiệp Hữu Cơ. Bên cạnh đó mong muốn chia sẻ với những ai quan tâm đến nông nghiệp và đặc biệt là bà con nông dân về những nguyên nhân khiến đất đai bị thái hóa, suy kiệt.
                    </span>
                </p>
                <p class="text-center">
                    <Image
                        style={{ borderRadius: 10 }}
                        height={270}
                        width={647}
                        src="./images/about/PHỤC-HỒI-CẢI-TẠO-DẤT-1.png"
                        alt=''
                    />
                </p>
                <p class="text-center">
                    <span class="text-base">
                        <strong>
                            <em>Các loại mặt hàng kinh doanh</em>
                        </strong>
                    </span>
                </p>
                <p>
                    <span class="font-sans	text-xl">
                        Việc lạm dụng hóa chất và thuốc BVTV vào thâm canh cây trồng sau nhiều năm đã góp phần đẩy nhanh quá trình suy thoái đất trồng và môi trường tự nhiên. Điều đó thúc đẩy chúng tôi muốn góp một phần nhỏ vào việc thay đổi nhận thức về cách sản xuất nông nghiệp không thân thiện gây ảnh hưởng đến môi trường sinh thái và sức khỏe con người.
                    </span>
                </p>
                <p class="text-center">
                    <Image
                        style={{ borderRadius: 10 }}
                        width={647}
                        height={270}
                        src="./images/about/PHÂN-BÓN-LÁ-2-1.png"
                        alt=''
                    />
                </p>
                <p class="text-center">
                    <span class="text-base">
                        <strong>
                            <em>Định hướng và mục tiêu của chúng tôi</em>
                        </strong>
                    </span>
                </p>
                <p>
                    <span class="font-sans	text-xl">
                    Chuyên cung cấp các sản phẩm phân bón, chế phẩm vi sinh – sinh học, hạt giống và vật tư nông nghiệp các loại. Với kinh nghiệm lâu năm về ngành nông nghiệp và phân bón hy vọng sẽ chia sẻ và cung cấp được những sản phẩm tốt, chất lượng và phù hợp đến với tay khách hàng và bà con nông dân.
                    
                    </span>
                </p>
                <p class="text-center">
                    <Image
                        style={{ borderRadius: 10 }}
                        width={647}
                        height={270}
                        src="./images/about/CAM-KẾT-BÁN-HÀNG.png"
                        alt=''
                    />
                </p>
                <p class="text-center">
                    <span class="text-base">
                        <strong>
                            <em>Cam kết kinh doanh và bán hàng</em>
                        </strong>
                    </span>
                </p>
                <p>
                    <span class="font-sans	text-xl">
                        Xin cảm ơn Quý khách hàng và bà con Nông dân.
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}
