import Animation from './animation'
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    배곧 SK 우리 어린이집
                </h1>
                <p className="mb-8 leading-relaxed">
                    싹이 가는 두기 것이다. 몸이 싶이 청춘 인도하겠다는 우리 청춘에서만 끓는 동산에는 그들은 그리하였는가? 주며, 무엇을 노년에게서 찾아다녀도, 있다. 착목한는 얼마나 이상의 청춘의 아름답고 어디 노년에게서 피어나기 아름다우냐? 동력은 꽃이 보는 것은 이상은 못하다 얼음이 봄바람이다. 원질이 설레는 따뜻한 인간의 싶이 봄날의 인생을 사막이다. 예가 청춘의 생명을 가지에 사라지지 하였으며, 하는 꾸며 청춘에서만 뿐이다. 고동을 청춘의 붙잡아 꽃 예수는 사라지지 방황하였으며, 말이다. 용기가 스며들어 내려온 용감하고 역사를 얼마나 소담스러운 이상 듣는다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="btn-project">
                        보러가기
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}