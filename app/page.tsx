import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Mail, CheckCircle, ArrowRight, Users, ClipboardList, HeartHandshake } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダーナビゲーション */}
      <div className="flex flex-col md:flex-row justify-between items-stretch w-full">
        <div className="bg-black text-white py-4 px-6 flex items-center">
          <Link href="/reservation" className="text-sm md:text-base hover:text-yellow-400 transition-colors">
            体験・カウンセリングのご予約はこちら
          </Link>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="bg-zinc-900 text-white py-4 px-6 flex items-center">
            <span className="text-sm md:text-base">お気軽にお問い合わせください</span>
          </div>
          <Link
            href="tel:03-6356-5355"
            className="bg-amber-600 text-white py-4 px-6 flex items-center gap-2 hover:bg-amber-700 transition-colors"
          >
            <PhoneCall size={18} />
            <span className="text-sm md:text-base">03-6356-5355</span>
          </Link>
          <Link
            href="/contact"
            className="bg-zinc-800 text-white py-4 px-6 flex items-center gap-2 hover:bg-zinc-700 transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm md:text-base">ネットからお問い合わせ</span>
          </Link>
        </div>
      </div>

      {/* ヒーローセクション */}
      <div className="relative h-[600px] w-full bg-zinc-900 overflow-hidden">
        {/* 背景画像 */}
        <Image
          src={null || "/placeholder.svg"}
          alt="フィットネスの背景"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* 大きな背景テキスト */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[150px] font-bold text-zinc-800 opacity-20 select-none">FITNESS</h1>
        </div>

        {/* ロゴとキャッチコピー */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 z-10">
          <div className="text-center mb-8">
            <p className="text-white text-xl mb-2">exe</p>
            <div className="flex justify-center mb-2">
              <Image src={null || "/placeholder.svg"} alt="ダンベルアイコン" width={60} height={40} />
            </div>
            <p className="text-white text-xl">Fitness Garage</p>
          </div>

          <div className="text-center px-4">
            <p className="text-white text-xl md:text-2xl mb-6">良質なプライベートジムがあなたの街に</p>
            <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">カッコいい大人を作る</h2>
            <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">秘密基地</h2>
            <p className="text-yellow-400 text-xl md:text-2xl font-medium mb-6">Fitness Garage exe</p>
            <p className="text-white text-lg md:text-xl">あなたも自分史上最高のカラダを手に入れませんか。</p>
          </div>
        </div>

        {/* カウンセリングバナー */}
        <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-amber-600 flex flex-col items-center justify-center text-center transform rotate-6 shadow-lg">
          <p className="text-sm text-amber-900 italic font-medium">counseling</p>
          <p className="text-white font-bold">無料</p>
          <p className="text-white font-bold text-sm">カウンセリング</p>
          <p className="text-white font-bold text-sm">受付中</p>
          <p className="text-xs text-white mt-1">※体験トレーニング（有料）もございます！</p>
        </div>
      </div>

      {/* お悩みセクション */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <Image
              src={null || "/placeholder.svg"}
              alt="お悩みの女性"
              width={400}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              あなたは今、
              <br />
              こんな<span className="text-yellow-500">お悩み</span>を
              <br />
              お持ちではありませんか？
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold text-xl">✓</span>
                <span>運動不足で体型が崩れてきた</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold text-xl">✓</span>
                <span>ジムに通いたいけど大勢の人の中で運動するのは苦手</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold text-xl">✓</span>
                <span>正しいトレーニング方法がわからない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold text-xl">✓</span>
                <span>食事管理も含めた総合的なサポートが欲しい</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-amber-600 italic">Premium</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold">プライベートジム</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">完全個室のプライベート空間</h3>
              <p className="text-sm text-gray-700">
                他のお客様の目を気にすることなく、トレーナーとマンツーマンでトレーニングに集中できます。
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center">
                  <ClipboardList className="text-white" size={24} />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">オーダーメイドプログラム</h3>
              <p className="text-sm text-gray-700">
                お客様一人ひとりの目標や体質に合わせたトレーニングと食事指導で効率的に理想のカラダへ導きます。
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center">
                  <HeartHandshake className="text-white" size={24} />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">徹底したアフターサポート</h3>
              <p className="text-sm text-gray-700">
                トレーニング後も食事や生活習慣のアドバイスを継続的に提供し、確実な結果へと導きます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ジムギャラリーセクション */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">充実設備のプライベートジム</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={null || "/placeholder.svg"}
                alt="ジム内装1"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={null || "/placeholder.svg"}
                alt="ジム内装2"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={null || "/placeholder.svg"}
                alt="ジム内装3"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={null || "/placeholder.svg"}
                alt="ジム内装4"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={null || "/placeholder.svg"}
                alt="ジム内装5"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={null || "/placeholder.svg"}
                alt="ジム内装6"
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 続けられる理由セクション */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src={null || "/placeholder.svg"}
                alt="笑顔の女性"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                <span className="relative">
                  続けられる理由
                  <span className="absolute -top-6 -right-6 text-amber-600 text-lg italic transform rotate-12">
                    Point
                  </span>
                </span>
              </h2>
              <p className="mb-6 text-gray-700">
                多くのジムでは3ヶ月以内に挫折してしまう方が大半ですが、Fitness Garage
                exeでは90%以上のお客様が半年以上継続されています。その理由は...
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">トレーナーとの信頼関係</h3>
                    <p className="text-sm text-gray-700">
                      一人のトレーナーが最後まで担当するので、信頼関係が築きやすく、モチベーションが維持できます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">無理のないプログラム設計</h3>
                    <p className="text-sm text-gray-700">
                      お客様の生活スタイルに合わせた無理のないプログラムで、ストレスなく継続できます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">目に見える成果</h3>
                    <p className="text-sm text-gray-700">
                      定期的な測定と写真撮影で変化を可視化し、達成感を感じながらトレーニングを続けられます。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fitness Garage exeの特徴 */}
      <div className="py-16 px-4 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-amber-600">Fitness Garage exe</span>の特徴
          </h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-zinc-800 p-6 rounded-lg">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3 text-amber-400">科学的根拠に基づいたトレーニング</h3>
                <p className="text-gray-300">
                  最新の運動生理学と栄養学の知見を取り入れた科学的アプローチで、効率的かつ安全にボディメイクを実現します。トレーナー全員が専門資格を保有し、定期的な研修で知識をアップデートしています。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-zinc-800 p-6 rounded-lg">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3 text-amber-400">完全個室のプライベート空間</h3>
                <p className="text-gray-300">
                  他のお客様の目を気にすることなく、集中してトレーニングに取り組める完全個室制。初心者の方や人目を気にする方でも安心してトレーニングに取り組めます。清潔で快適な空間で、モチベーションを高く保ちます。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-zinc-800 p-6 rounded-lg">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-3 text-amber-400">食事指導と生活習慣改善のサポート</h3>
                <p className="text-gray-300">
                  トレーニングだけでなく、食事指導と生活習慣の改善をトータルでサポート。専用アプリで食事記録を管理し、トレーナーが適切なアドバイスを提供します。無理な食事制限ではなく、長期的に続けられる食習慣の確立を目指します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 料金プラン */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">料金プラン</h2>
          <p className="text-center text-gray-700 mb-12">あなたのライフスタイルに合わせて選べる3つのプラン</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-blue-500 text-white text-center py-4">
                <h3 className="text-xl font-bold">スタンダードプラン</h3>
              </div>
              <div className="p-6">
                <p className="text-center text-3xl font-bold mb-4">
                  ¥12,800<span className="text-sm font-normal">/月（税込）</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">月4回のパーソナルトレーニング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">基本的な食事アドバイス</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">体組成測定（月1回）</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-2 border-amber-600 rounded-lg overflow-hidden shadow-xl relative transition-transform hover:scale-105">
              <div className="absolute top-0 right-0 bg-amber-600 text-white py-1 px-4 text-sm font-bold transform translate-y-0 translate-x-0">
                人気No.1
              </div>
              <div className="bg-amber-600 text-white text-center py-4">
                <h3 className="text-xl font-bold">スタンダードプラン</h3>
              </div>
              <div className="p-6">
                <p className="text-center text-3xl font-bold mb-4">
                  ¥19,800<span className="text-sm font-normal">/月（税込）</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">月8回のパーソナルトレーニング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">詳細な食事指導と管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">体組成測定（月2回）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">LINEでのサポート</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-amber-600 text-white py-2 px-6 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="bg-purple-500 text-white text-center py-4">
                <h3 className="text-xl font-bold">プレミアムプラン</h3>
              </div>
              <div className="p-6">
                <p className="text-center text-3xl font-bold mb-4">
                  ¥29,800<span className="text-sm font-normal">/月（税込）</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">月12回のパーソナルトレーニング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">専属栄養士による食事プラン</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">体組成測定（週1回）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">24時間LINEサポート</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">プロテイン1ヶ月分プレゼント</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">その他のプランやオプションについてはお問い合わせください</p>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-700 transition-transform hover:scale-105"
            >
              無料カウンセリングを予約する <ArrowRight className="inline ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* トレーナー紹介 */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <Image
              src={null || "/placeholder.svg"}
              alt="ダンベルアイコン"
              width={30}
              height={20}
              className="inline mr-2"
            />
            Fitness Garage exeのトレーナー紹介
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80">
                <Image src={null || "/placeholder.svg"} alt="男性トレーナー" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">鈴木 健太</h3>
                <p className="text-sm text-gray-500 mb-4">チーフトレーナー / パーソナルトレーナー歴8年</p>
                <p className="text-gray-700 mb-4">
                  元プロアスリートとしての経験を活かし、効率的なボディメイクをサポート。特に筋肥大と減量に関する専門知識が豊富で、多くのコンテスト入賞者を輩出しています。お客様一人ひとりの目標に合わせたプログラム設計が得意です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">
                    NSCA認定パーソナルトレーナー
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">
                    ボディメイクスペシャリスト
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">スポーツ栄養士</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80">
                <Image src={null || "/placeholder.svg"} alt="女性トレーナー" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">佐藤 美咲</h3>
                <p className="text-sm text-gray-500 mb-4">シニアトレーナー / パーソナルトレーナー歴5年</p>
                <p className="text-gray-700 mb-4">
                  女性特有の悩みに寄り添ったトレーニングが得意。産後ダイエットや美しいボディラインの構築に定評があり、多くの女性クライアントから支持されています。栄養学の知識も豊富で、無理なく続けられる食事指導には定評があります。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">
                    JATI認定トレーニング指導者
                  </span>
                  <span className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">ヨガインストラクター</span>
                  <span className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded">食生活アドバイザー</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ビフォーアフター */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">実績</h2>
          <p className="text-center text-gray-700 mb-12">多くのお客様が理想のカラダを手に入れています</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <Image src={null || "/placeholder.svg"} alt="ビフォー" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs py-1 px-2 rounded">Before</div>
                </div>
                <div className="relative h-64">
                  <Image src={null || "/placeholder.svg"} alt="アフター" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs py-1 px-2 rounded">After</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Aさん（30代男性）</h3>
                <p className="text-sm text-gray-700 mb-2">トレーニング期間：3ヶ月</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-bold">体重</p>
                    <p>78kg → 72kg</p>
                  </div>
                  <div>
                    <p className="font-bold">体脂肪率</p>
                    <p>25% → 15%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <Image src={null || "/placeholder.svg"} alt="ビフォー" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs py-1 px-2 rounded">Before</div>
                </div>
                <div className="relative h-64">
                  <Image src={null || "/placeholder.svg"} alt="アフター" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs py-1 px-2 rounded">After</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Bさん（20代女性）</h3>
                <p className="text-sm text-gray-700 mb-2">トレーニング期間：4ヶ月</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-bold">体重</p>
                    <p>62kg → 54kg</p>
                  </div>
                  <div>
                    <p className="font-bold">体脂肪率</p>
                    <p>32% → 22%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <Image src={null || "/placeholder.svg"} alt="ビフォー" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs py-1 px-2 rounded">Before</div>
                </div>
                <div className="relative h-64">
                  <Image src={null || "/placeholder.svg"} alt="アフター" fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs py-1 px-2 rounded">After</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Cさん（40代男性）</h3>
                <p className="text-sm text-gray-700 mb-2">トレーニング期間：6ヶ月</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-bold">体重</p>
                    <p>85kg → 75kg</p>
                  </div>
                  <div>
                    <p className="font-bold">体脂肪率</p>
                    <p>28% → 16%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* よくある質問 */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">よくある質問</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">初心者でも大丈夫ですか？</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                はい、もちろんです。当ジムのお客様の約70%が運動初心者の方です。経験豊富なトレーナーが基礎から丁寧に指導しますので、安心してご利用いただけます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">どのくらいの期間で効果が出ますか？</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                個人差はありますが、多くのお客様が1ヶ月程度で体重や体脂肪率の変化を実感されています。3ヶ月継続されると、見た目にも明らかな変化が現れることが多いです。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">女性でも筋肉がつきすぎることはありませんか？</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                ご安心ください。女性は男性と比べてテストステロンの分泌量が少ないため、トレーニングをしても男性のように大きな筋肉がつくことはありません。適切なトレーニングで引き締まった美しいボディラインを作ることができます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">予約のキャンセルはできますか？</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                24時間前までのキャンセルであれば、ペナルティなく振替が可能です。当日キャンセルの場合は1回分消化となりますのでご注意ください。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">持ち物は何が必要ですか？</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                動きやすい服装とシューズ、タオル、飲み物をお持ちください。更衣室やシャワールームも完備していますので、仕事帰りや出勤前にもご利用いただけます。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* アクセス */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">アクセス</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707428!2d139.76493375!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1650000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Fitness Garage exe 東京本店</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-20">住所：</span>
                  <span>〒100-0001 東京都千代田区丸の内1-1-1 丸の内センタービル5F</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-20">アクセス：</span>
                  <span>東京駅丸の内北口より徒歩5分</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-20">営業時間：</span>
                  <span>平日 7:00〜23:00 / 土日祝 9:00〜20:00</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-20">定休日：</span>
                  <span>年中無休（年末年始を除く）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-20">電話番号：</span>
                  <span>03-6356-5355</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold min-w-20">メール：</span>
                  <span>info@fitness-exe.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA セクション */}
      <div className="py-12 px-4 bg-amber-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            あなたの理想のカラダづくりを全力でサポートします
          </h2>
          <p className="text-white mb-8">
            まずは無料カウンセリングで、あなたの目標や悩みをお聞かせください。
            専門トレーナーがあなたに最適なプランをご提案します。
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/reservation"
              className="bg-white text-amber-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-transform hover:scale-105"
            >
              無料カウンセリングを予約する
            </Link>
            <Link
              href="tel:03-6356-5355"
              className="bg-zinc-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-zinc-700 transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} />
              <span>03-6356-5355</span>
            </Link>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-zinc-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <Image src={null || "/placeholder.svg"} alt="ダンベルアイコン" width={30} height={20} />
                <span className="text-xl font-bold">Fitness Garage exe</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                良質なプライベートジムがあなたの街に。 カッコいい大人を作る秘密基地、Fitness Garage exeで
                自分史上最高のカラダを手に入れませんか。
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold mb-4">サービス</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    パーソナルトレーニング
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    ボディメイク
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    食事指導
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    姿勢改善
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    ダイエット
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-gray-400">東京都千代田区丸の内1-1-1</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-400">03-6356-5355</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mt-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-gray-400">info@fitness-exe.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Fitness Garage exe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
