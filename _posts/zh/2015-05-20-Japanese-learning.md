---
layout: post
title: 日语学习
categories: zh linguistics japanese
language: zh
tags: 语言 日语 窥径

description: 
---
{% raw %}
<style>
    .c1 { background: #FCFFF5; }
    .c2 { background: #D1DBBD; }
    .c3 { background: #91AA9D; }
    .c4 { background: #3E606F; }
    .c5 { background: #193441; }
    .c6 { background: #36667F; }
    .c7 { background: #B9E6FF; }
    .c8 { background: #6CCBFF; }
    .c9 { background: #5C737F; }
    .c10 { background: #57A3CC; }
    body {
        background: #f8f8f8;
        color: #434747;
    }
    table {
        border: 1px solid #000;
        border-collapse: collapse;
        c2olor: #fff;
        margin: 10px;
    }
    .kana {
        text-align: center;
        float: left;
    }
    .kana td::first-letter {
        color: #787F7F;
    }
    tr:nth-child(2n+1) {
        background: #ddd;
    }
    th, td {
        border: 1px solid #000;
        padding: 0 4px;
    }
    .syntax { clear: both; }
    .syntax p, .syntax span {
        color: #787f7f;
        font-size: 12px;
        margin: 0;
        font-weight: normal;
    }
    .syntax detail {
        font-size: 12px;
        margin: 0;
    }
    tbody tr.primary {
        background: #d9e5e5;
    }
    .c10 b { color: #ff0; }
    .word-lists {
        padding: 0 1em;
    }
    .word-lists>li {
        list-style: none;
        clear: both;
    }
    .word-lists li:after {
        content: '';
        display: block;
        clear: both;
    }
    .word-lists div {
        cursor: pointer;
    }
    .word-lists .collapse table {
        display: none;
    }
    .word-lists .collapse .fa::before {
        content:"\f054";
    }
    .word-lists .fa::before {
        content:"\f078";
    }
    .word-card {
        background: #ddd;
        padding: 4px;
        margin: 4px;
        height: 36px;
        float: left;
        border-color: #ddd;
        border-width: 4px 4px 2px;
    }
    .word-card td {
        padding: 0;
        c2olor: #000;
        text-align: center;
        font-weight: 700;
        border: 0;
        line-height: 1;
    }
    .word-card .sup td {
        color: #787f7f;
        font-size: 12px;
        height: 14px;
    }
    .word-card .meaning {
        color: #527F7F;
        font-size: 12px;
        padding-left: 4px;
    }
     .word-card .tone {
        color: #A18905;
        font-size: 12px;
        padding-left: 4px;
     }
    .word-card .match, .word-card .sup .match {
        color: #f00;
    }
    .word-card span {
        padding: 0;
        color: #000;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        font-weight: 700;
    }
    .word-card b {
        color: #5C737F;
        font-size: 12px;
        top: 3px;
        display: block;
        height: 14px;
    }
</style>
<script type="text/javascript" src="/assets/js/angular.min.js"></script>

<div ng-app="jpApp">
<table class="kana">
    <tr>
        <td></td> <td>あ 列</td> <td>い 列</td> <td>う 列</td> <td>え 列</td> <td>お 列</td>
    </tr>
    <tr>
        <td>あ 行</td> <td>あ ア</td> <td>い イ</td> <td>う ウ</td> <td>え エ</td> <td>お オ</td>
    </tr>
    <tr>
        <td></td> <td>a</td> <td>i</td> <td>u</td> <td>e</td> <td>o</td>
    </tr>
    <tr>
        <td>か 行</td> <td>か カ</td> <td>き キ</td> <td>く ク</td> <td>け ケ</td> <td>こ コ</td>
    </tr>
    <tr>
        <td></td> <td>ka</td> <td>ki</td> <td>ku</td> <td>ke</td> <td>ko</td>
    </tr>
    <tr>
        <td>さ 行</td> <td>さ サ</td> <td>し シ</td> <td>す ス</td> <td>せ セ</td> <td>そ ソ</td>
    </tr>
    <tr>
        <td></td> <td>sa</td> <td>shi</td> <td>su</td> <td>se</td> <td>so</td>
    </tr>
    <tr>
        <td>た 行</td> <td>た タ</td> <td>ち チ</td> <td>つ ツ</td> <td>て テ</td> <td>と ト</td>
    </tr>
    <tr>
        <td></td> <td>ta</td> <td>ti</td> <td>tu</td> <td>te</td> <td>to</td>
    </tr>
    <tr>
        <td>な 行</td> <td>な ナ</td> <td>に ニ</td> <td>ぬ ヌ</td> <td>ね ネ</td> <td>の ノ</td>
    </tr>
    <tr>
        <td></td> <td>na</td> <td>ni</td> <td>nu</td> <td>ne</td> <td>no</td>
    </tr>
    <tr>
        <td>は 行</td> <td>は ハ</td> <td>ひ ヒ</td> <td>ふ フ</td> <td>へ ヘ</td> <td>ほ ホ</td>
    </tr>
    <tr>
        <td></td> <td>ha</td> <td>hi</td> <td>hu</td> <td>he</td> <td>ho</td>
    </tr>
    <tr>
        <td>ま 行</td> <td>ま マ</td> <td>み ミ</td> <td>む ム</td> <td>め メ</td> <td>も モ</td>
    </tr>
    <tr>
        <td></td> <td>ma</td> <td>mi</td> <td>mu</td> <td>me</td> <td>mo</td>
    </tr>
    <tr>
        <td>や 行</td> <td>や ヤ</td> <td></td> <td>ゆ ユ</td> <td></td> <td>よ ヨ</td>
    </tr>
    <tr>
        <td></td> <td>ya</td> <td></td> <td>yu</td> <td></td> <td>yo</td>
    </tr>
    <tr>
        <td>ら 行</td> <td>ら ラ</td> <td>り リ</td> <td>る ル</td> <td>れ レ</td> <td>ろ ロ</td>
    </tr>
    <tr>
        <td></td> <td>ra</td> <td>ri</td> <td>ru</td> <td>re</td> <td>ro</td>
    </tr>
    <tr>
        <td>わ 行</td> <td>わ ワ</td> <td>ゐ ヰ</td> <td></td> <td>ゑ ヱ</td> <td>を ヲ</td>
    </tr>
    <tr>
        <td></td> <td>wa</td> <td>wi</td> <td></td> <td>we</td> <td>wo</td>
    </tr>
    <tr>
        <td></td> <td></td> <td>ん ン</td> <td></td> <td></td> <td></td>
    </tr>
    <tr>
        <td></td> <td></td> <td>n</td> <td></td> <td></td> <td></td>
    </tr>
</table>
<table class="kana">
    <tr>
        <td>が 行</td> <td>が ガ</td> <td>ぎ ギ</td> <td>ぐ グ</td> <td>げ ゲ</td> <td>ご ゴ</td>
    </tr>
    <tr>
        <td></td> <td>ga</td> <td>gi</td> <td>gu</td> <td>ge</td> <td>go</td>
    </tr>
    <tr>
        <td>ざ 行</td> <td>ざ ザ</td> <td>じ ジ</td> <td>ず ズ</td> <td>ぜ ゼ</td> <td>ぞ ゾ</td>
    </tr>
    <tr>
        <td></td> <td>za</td> <td>zi</td> <td>zu</td> <td>ze</td> <td>zo</td>
    </tr>
    <tr>
        <td>だ 行</td> <td>だ ダ</td> <td>ぢ ヂ</td> <td>づ ヅ</td> <td>で デ</td> <td>ど ド</td>
    </tr>
    <tr>
        <td></td> <td>da</td> <td>di</td> <td>du</td> <td>de</td> <td>do</td>
    </tr>
    <tr>
        <td>ば 行</td> <td>ば バ</td> <td>び ビ</td> <td>ぶ ブ</td> <td>べ ベ</td> <td>ぼ ボ</td>
    </tr>
    <tr>
        <td></td> <td>ba</td> <td>bi</td> <td>bu</td> <td>be</td> <td>bo</td>
    </tr>
    <tr>
        <td>ぱ 行</td> <td>ぱ パ</td> <td>ぴ ピ</td> <td>ぷ プ</td> <td>ぺ ペ</td> <td>ぽ ポ</td>
    </tr>
    <tr>
        <td></td> <td>pa</td> <td>pi</td> <td>pu</td> <td>pe</td> <td>po</td>
    </tr>
</table>

<!-- word categories -->
<table class="syntax">
    <tr>
        <td rowspan="12">品詞 <span>ひんし</span></td>
        <td rowspan="10">自立語 <span>じりつご</span></td>
        <td rowspan="3" colspan="4">用言 <span>ようげん</span><p>有词尾变化，可以单独作谓语</p></td>
        <td>動詞 <span>どうし</span></td>
    </tr>
    <tr>
        <td>形容詞 <span>けいようし</span></td>
    </tr>
    <tr>
        <td>形容動詞 <span>けいようどうし</span></td>
    </tr>
    <tr>
        <td rowspan="7"><p>无词尾变化</p></td>
        <td rowspan="3" colspan="3">体言 <span>たいげん</span><p>可作主语</p></td>
        <td>名詞 <span>めいし</span></td>
    </tr>
    <tr>
        <td>代名詞 <span>だいめいし</span></td>
    </tr>
    <tr>
        <td>数词 <span>すうし</span></td>
    </tr>
    <tr>
        <td rowspan="4"><p>不可作主语</p></td>
        <td rowspan="2"><p>可作修饰语</p></td>
        <td><p>修饰用言</p></td>
        <td>副詞 <span>ふくし</span><p>修饰用言的状态、程度、形容词与形容动词经由语尾变化可以变成副词，如：少し、とても</p></td>
    </tr>
    <tr>
        <td><p>修饰体言</p></td>
        <td>連体詞 <span>れんたいし</span><p>只能加在体言前作修饰，如：この</p></td>
    </tr>
    <tr>
        <td rowspan="2"><p>不可做修饰语</p></td>
        <td><p>能接续</p></td>
        <td>接続詞 <span>せつぞくし</span><p>在句与句之中作为承先启后的作用，如：そして</p></td>
    </tr>
    <tr>
        <td><p>表示感动</p></td>
        <td>感動詞 <span>かんどうし</span></td>
    </tr>
    <tr>
        <td rowspan="2">付属語 <span>ふぞくご</span></td>
        <td colspan="4"><p>有词尾变化</p></td>
        <td>助動詞 <span>じょどうし</span></td>
    </tr>
    <tr>
        <td colspan="4"><p>无词尾变化</p></td>
        <td>助詞 <span>じょし</span></td>
    </tr>
</table>

<!-- verbs formats -->
<table class="syntax">
    <tr>
        <th width="20%" colspan="2"></th>
        <th width="22%"><p>ごだん</p>五段</th>
        <th width="6%"><p>かみいちだん</p>上一段</th>
        <th width="6%"><p>しもいちだん</p>下一段</th>
        <th width="8%">カ変</th>
        <th width="8%">サ変</th>
        <th width="12%"><p>けいようし</p>形容詞</th>
        <th width="18%"><p>けいようどうし</p>形容動詞</th>
    </tr>
    <tr class="primary">
        <td width="7%"><em>終止形</em> <span>しゅうしけい</span></td>
        <td><p>+ 「から、けれども、が、か、と、とも、とて、し、なら、しか、や、とか、など」(助詞)、「らしい、まい、みたいだ、そうだ、な」(助動詞)、「だろう、でしょう(敬体)」(推测)，又称为辞书形或基本形</p></td>
        <td>
            〜非る<span>，如：飲む</span><br>
            「あうお」段 + る<span>，如：終わる</span>
        </td>
        <td>い列 + る<span>，如：見る</span></td>
        <td>え列 + る<span>，如：食べる</span></td>
        <td>来（く）る</td>
        <td>為（す）る</td>
        <td>〜い<span>，如：寒い</span></td>
        <td>〜だ<span>，如：綺麗だ</span></td>
    </tr>
    <tr>
        <td></td>
        <td>肯定形 <span>こうていけい</span></td>
        <td colspan="5">同終止形</td>
        <td>+ だ<span>，如：寒い -> 寒いだ</span></td>
        <td>同終止形</td>
    </tr>
    <tr>
        <td></td>
        <td>禁止形</td>
        <td colspan="5">+ な<span>，如：飲むな、食べるな</span></td>
    </tr>
    <tr class="primary">
        <td><em>連体形</em> <span>れんたいけい</span></td>
        <td><p>+ 体言、「ので、のに、ものを、ものの」(助詞)、「ようだ」(助動詞)</p></td>
        <td colspan="6">同終止形</td>
        <td>〜な<span>，如：綺麗な</span></td>
    </tr>
    <tr class="primary">
        <td><em>未然形</em> <span>みぜんけい</span></td>
        <td><span>+「ない、ぬ、まい」(否定)、「れる、られる、せる、される」、「う、よう」(意志)</span></td>
        <td>
            ① う段 -> あ段，う -> わ <span> +「ない、れる、られる、せる、させる」，如：飲む -> 飲ま，買う -> 買わ</span><br>
            <!-- う列 -> お列，う -> お<span> +「う、うよ」，如：飲む -> 飲も，買う -> 買お</span><br> -->
            特殊<span>，ある -> あろ</span><br>
            ② う段 -> お段 <span> +「う、よう」，又称为推量形
        </td>
        <td colspan="2">去掉る<span>，如：見る -> 見，食べる -> 食べ</span></td>
        <td>来（こ）</td>
        <td>
            さ<span> +「れる、せる」</span><br>
            し<span> +「ない、よう」</span><br>
            せ<span> +「られる、ぬ」</span>
        </td>
        <td>〜かろ<span>，如：寒かろ</span></td>
        <td>〜だろ<span>，如：綺麗だろ</span></td>
    </tr>
    <tr>
        <td></td>
        <td>自发态 <span>じはつけい</span><br>受身态 <span>うけみけい，相当于汉语的被</span></td>
        <td>+ れる<span>，如：飲む -> 飲まれる，買う -> 買われる</span></td>
        <td colspan="3">+ られる<span>，如：見る -> 見られる，来（く）る -> 来（こ）られる</span></td>
        <td>せ + られる -> される</td>
    </tr>
    <tr>
        <td></td>
        <td>可能态 <span>かのうけい，注意，他动词变自动词</span></td>
        <td>+ れる，但由于约音便，あ段 + れる -> え段 + る<span>，如：飲む -> 飲まれる -> 飲める，買う -> 買われる -> 買える</span></td>
        <td colspan="3">同自发态</span></td>
        <td>できる</td>
    </tr>
    <tr>
        <td></td>
        <td>使役态 <span>しえきたい，相当于汉语的让，注意，自动词前跟お或に皆可</span></td>
        <td>+ せる<span>，如：飲む -> 飲ませる，買う -> 買わせる</span></td>
        <td colspan="3">+ させる<span>，如：見る -> 見させる，来（く）る -> 来（こ）させる</span></td>
        <td>さ + せる</td>
    </tr>
    <tr>
        <td></td>
        <td>被役态 <span>= 使役态 + 受身态</span></td>
        <td>+ せ られる -> される<span>，如：飲む -> 飲まされる，買う -> 買わされる</span></td>
        <td colspan="3">+ させ られる<span>，如：見る -> 見させられる，来（く）る -> 来（こ）させられる</span></td>
        <td>さ + せる</td>
    </tr>
    <tr>
        <td></td>
        <td>否定形 <span>ひていけい</span></td>
        <td>
            + ない、ぬ<span>，如：飲む -> 飲まない、飲まぬ，買う -> 買わない、買わぬ</span><br>
            特殊 <span>，ある -> ない</span>
        </td>
        <td colspan="3">
            + ない、ぬ、まい<span>，如：見る -> 見ない、見ぬ，来（く）る -> 来（こ）ない、来ぬ</span><br>
        </td>
        <td>し + ない</td>
        <td colspan="2">见連用形</td>
    </tr>
    <tr>
        <td></td>
        <td>劝诱</td>
        <td>+ しょう<span>，如：飲む -> 飲ましょう，買う -> 買わしょう</span></td>
        <td colspan="3">+ ましょう<span>，如：見る -> 見ましょう，来（く）る -> 来（こ）ましょう</span></td>
        <td>し + ましょう</td>
        <td>〜い + でしょう<span>，如：寒いでしょう</span></td>
        <td>〜でしょう<span>，如：綺麗でしょう</span></td>
    </tr>
    <tr>
        <td>意志形</td>
        <td><span>推量形 +「う、よう」，让我们去做</span></td>
        <td>う段 -> お段 + う<span>，如：飲む -> 飲もう，買う -> 買おう</span></td>
        <td colspan="3">去掉る + よう<span>，如：見る -> 見よう，来（く）る -> 来（こ）よう</span></td>
        <td>し + よう</td>
        <td>〜かろ + う<span>，如：寒かろう</span></td>
        <td>〜だろ + う<span>，如：綺麗だろう</span></td>
    </tr>
    <tr class="primary">
        <td><em>連用形</em> <span>れんようけい</span></td>
        <td><span>+「て、ても、たり、に、ながら、つ」(助詞)、「ます、た、たい(自己愿望)、たがる(他人愿望)、そうだ(好像)」(助動詞)</span></td>
        <td>
            ① う段 -> い段 <span> +「ます」，如：飲む -> 飲み</span><br>
            特殊<span>，御座（ござ）る、為（な）さる、いらっしゃる、下（くだ）さる、仰（おっしゃ）る，る -> い</span><br><br>
            ② 音便 <span>+「て、た」，五段动词连用形接助动词（た、たら）、助词（たり、て、ては、ても、てから）以及补助动词用法（ている、てある、てあげる、てくださる）时，语尾发音会改变</span><br>
            - 促音便 <span>そくおんびん，</span><br>
            「うつる」-> っ<span>，如：買う -> 買って，待つ -> 買って，売る -> 買って</span><br>
            - い音便 <span>いおんびん，</span><br>
           く -> い<span> +「て、た」</span>，ぐ -> い<span> +「で、だ」，如：書く -> 書いて，急ぐ -> 急いで</span>，特殊<span>，行く -> 行って</span><br>
            - 撥音便 <span>はつおんびん，</span><br>
            「ぬむぶ」 -> ん<span> +「で、だ」，如：死ぬ -> 死んで，飲む -> 飲んで，飛ぶ -> 飛んで<span>
        </td>
        <td colspan="2">去掉る<span>，如：見る -> 見，食べる -> 食べ</span></td>
        <td>来（き）</td>
        <td>し</td>
        <td>
            〜く<span> +「て、ない」，如：寒くて、寒くない</span><br>
            〜かっ<span> +「た」，如：寒かった</span>
        </td>
        <td>
            〜で<span> +「ない」，如：綺麗でない</span><br>
            〜だっ<span> +「た」</span>、に<span>，如：綺麗だった、綺麗に</span>
        </td>
    </tr>
    <tr>
        <td></td>
        <td>て形<p>也可表示并列或状态</p></td>
        <td colspan="5">
            て<span>「下（くだ）さい、ましょう」，如：買う -> 買って，書く -> 書いて，飲む -> 飲んで，見る -> 見て，来（く）る -> 来（き）て，為（す）る -> して</span><br>
            て　いる<detail>(进行体)</detail>
        </td>
        <td>〜く + て<span>，如：寒くて</span></td>
        <td>〜で<span>，如：綺麗で</span></td>
    </tr>
    <tr>
        <td></td>
        <td>たい、たがる<p>表示愿望</p></td>
        <td colspan="5">
            て<span>「下（くだ）さい、ましょう」，如：買う -> 買って，書く -> 書いて，飲む -> 飲んで，見る -> 見て，来（く）る -> 来（き）て，為（す）る -> して</span><br>
            て　いる<detail>(进行体)</detail>
        </td>
        <td>〜く + て<span>，如：寒くて</span></td>
        <td>〜で<span>，如：綺麗で</span></td>
    </tr>
    <tr>
        <td></td>
        <td>一般时</td>
        <td colspan="5">
            否定，+「ない、ぬ」，见未然形<br>
            丁寧語，+「ます<detail>（肯定）</detail>、ません<detail>（否定）</detail>」<span>，如：買う -> 買います、買いません，書く -> 書きます、書きません，飲む -> 飲みます、飲みません，見る -> 見ます、見ません，来（く）る -> 来（き）ます、来ません，為（す）る -> します、しません</span>
        </td>
        <td>
            否定，〜く + ない<span>，如：寒くない</span><br>
            丁寧語，〜い + です<detail>（肯定）</detail>、〜く +「ないです、ありません」<detail>（否定）</detail><span>如：寒いです、寒くないです、寒くありません</span>
        </td>
        <td>
            否定，〜では + ない<span>，如：綺麗ではない</span><br>
            丁寧語，〜です<detail>（肯定）</detail>、〜では +「ないです、ありません」<detail>（否定）</detail><span>，如：綺麗だ -> 綺麗です，綺麗ではない -> 綺麗ではないです、綺麗ではありません</span>
        </td>
    </tr>
    <tr>
        <td></td>
        <td>过去时</td>
        <td colspan="5">
            + た<span>，如：買う -> 買った，書く -> 書いた，飲む -> 飲んだ，見る -> 見た，来（く）る -> 来（き）た，為（す）る -> した</span><br>
            否定，ない的过去时，+ なかった，见未然形<br>
            丁寧語，+「ました<detail>（肯定）</detail>、ませんでした<detail>（否定）</detail>」<span>，如：買う -> 買いました、買いませんでした，書く -> 書きました、書きませんでした，飲む -> 飲みました、飲みませんでした，見る -> 見ました、見ませんでした，来（く）る -> 来（き）ました、来ませんでした，為（す）る -> しました、しませんでした</span>
        </td>
        <td>
            〜かっ + た<span>，如：寒い -> 寒かった，寒くない -> 寒くなかった</span><br>
            丁寧語，+ です，，或 〜く + ありませんでした<detail>（否定）</detail><span>如：寒かったです、寒くなかったです、寒くありませんでした</span>
        </td>
        <td>
            「〜だっ<detail>（肯定）</detail>、〜では + なかっ<detail>(否定)</detail>」+ た<span>，如：綺麗だ -> 綺麗だった，綺麗ではない -> 綺麗ではなかった</span><br>
            丁寧語，〜でした<detail>（肯定）</detail>、〜では +「なかったです、ありませんでした」<detail>（否定）</detail><span>，如：綺麗です -> 綺麗でした，綺麗ではないです -> 綺麗ではなかったです，綺麗ではありません -> 綺麗ではありませんでした</span>
        </td>
    </tr>
    <tr class="primary">
        <td><em>仮定形</em> <span>かていけい</span></td>
        <td><span>+「ば」</span></td>
        <td colspan="5">う段 -> え段<span>，如：飲む -> 飲め，見る -> 見れ，来（く）る -> 来（く）れ，為（す）る -> すれ</span></td>
        <td>〜けれ<span> +「ば」，如：寒けれ</span></td>
        <td>〜なら<span>，如：綺麗なら</span></td>
    </tr>
    <tr>
        <td><em>命令形</em> <span>めいれいけい</span></td>
        <td></td>
        <td>
            う段 -> え段<span>，如：飲む -> 飲め，買う -> 買え</span><br>
            特殊<span>，御座（ござ）る、為（な）さる、いらっしゃる、下（くだ）さる、仰（おっしゃ）る，る -> い</span>
        </td>
        <td colspan="2">る -> ろ、よ<span>，如：見る -> 見ろ、見よ</span></td>
        <td>来（こ）い</td>
        <td>し + ろ、せ + よ</td>
    </tr>
</table>

<!-- 敬语 formats -->
<table class="syntax">
    <tr>
        <td width="12%"></td>
        <td width="27%">尊敬语（そんけいご）<p>尊敬话题主体，也叫尊他语，如“敬启”，“令尊”等。</p></td>
        <td width="27%">谦譲语（けんじょうご）<p>贬低话题主体（自身），尊敬动作接受者，也叫自谦语，如“拜见”，“拙作”等。</p></td>
        <td width="27%">丁宁语（ていねいご）<p>贬低话题主体（自身），尊敬说话对象，也叫礼貌语、郑重语。</p></td>
        <td width="7%"></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>在（あ）る</td>
        <td></td>
        <td></td>
        <td>御（ご）座（ざ）います</td>
        <td rowspan="2">在</td>
    </tr>
    <tr>
        <td>居（い）る</td>
        <td rowspan="3">いらっしゃる、御（お）出（い）でになる</td>
        <td>居（お）る</td>
        <td>居（お）ります</td>
    </tr>
    <tr>
        <td>行（い）く</td>
        <td rowspan="2">伺（うかが）う、参（まい）る、上（あ）がる</td>
        <td rowspan="2">参（まい）ります</td>
        <td>去</td>
    </tr>
    <tr>
        <td>来（く）る</td>
        <td>来</td>
    </tr>
    <tr>
        <td>為（す）る</td>
        <td>為（な）さる</td>
        <td>致（いた）す、申（もう）す</td>
        <td>致（いた）します、申（もう）します</td>
        <td>做</td>
    </tr>
    <tr>
        <td>食（た）べる</td>
        <td rowspan="2">召（め）し上（あ）がる</td>
        <td rowspan="2">頂（いただ）く</td>
        <td rowspan="2">頂（いただ）きます</td>
        <td>吃</td>
    </tr>
    <tr>
        <td>飲（の）む</td>
        <td>喝</td>
    </tr>
    <tr>
        <td>貰（もら）う</td>
        <td></td>
        <td>頂（いただ）く、頂（ちょう）戴（だい）する</td>
        <td>頂（いただ）きます</td>
        <td>接受</td>
    </tr>
    <tr>
        <td>遣（や）る</td>
        <td></td>
        <td>上（あ）げる、差（さ）し上（あ）げる</td>
        <td></td>
        <td>送</td>
    </tr>
    <tr>
        <td>呉（く）れる</td>
        <td>下（くだ）さる</td>
        <td></td>
        <td></td>
        <td>给我</td>
    </tr>
    <tr>
        <td>着（き）る</td>
        <td>お召（め）しになる</td>
        <td></td>
        <td></td>
        <td>穿</td>
    </tr>
    <tr>
        <td>言（い）う</td>
        <td>仰（おっ）しゃる</td>
        <td>申（もう）し上げる、申（もう）す</td>
        <td>申（もう）します</td>
        <td>说</td>
    </tr>
    <tr>
        <td>見（み）る</td>
        <td>御（ご）覧（らん）になる</td>
        <td>拝（はい）見（けん）する</td>
        <td></td>
        <td>看</td>
    </tr>
    <tr>
        <td>見（み）せる</td>
        <td></td>
        <td>御（ご）覧（らん）に入（はい）れる、お目（め）にかける</td>
        <td></td>
        <td>给我看</td>
    </tr>
    <tr>
        <td>会（あ）う</td>
        <td></td>
        <td>お目（め）にかかる</td>
        <td></td>
        <td>见面</td>
    </tr>
    <tr>
        <td>思（おも）う</td>
        <td>思（おぼ）し召（め）す</td>
        <td rowspan="2">存（ぞん）じる</td>
        <td></td>
        <td>想</td>
    </tr>
    <tr>
        <td>知（し）る</td>
        <td>ご存（ぞん）知（じ）だ</td>
        <td>存（ぞん）じております</td>
        <td>知道</td>
    </tr>
    <tr>
        <td>分（わ）かる</td>
        <td></td>
        <td>承（しょう）知（ち）する</td>
        <td>知道</td>
    </tr>
    <tr>
        <td>問（と）う</td>
        <td>お問（と）い合（あ）わせ、お尋（たず）ねになる</td>
        <td>伺（うかが）う、お伺（うかが）いする</td>
        <td>问</td>
    </tr>
    <tr>
        <td>寝（ね）る</td>
        <td>お休（やす）みになる</td>
        <td></td>
        <td>休（やす）みます</td>
        <td>睡</td>
    </tr>
    <tr>
        <td>死（し）ぬ</td>
        <td>お亡くなりになる</td>
        <td></td>
        <td>亡くなります</td>
        <td>死</td>
    </tr>
</table>

<div ng-controller="WordsController">
    total: <span>{{total}}</span><br>
    <input ng-model="query" ng-value="Search"><br>
    <table ng-repeat="word in words | match: query" class="word-card">
        <tr class="sup"><td ng-repeat="p in word.pronounce" class="{{ p === query ? 'match' : '' }}">{{p}}</td><td></td></tr>
        <tr><td ng-repeat="p in word.ji" class="{{ p === query ? 'match' : '' }}">{{p}}</td><td class="meaning">{{word.meaning}}</td></tr>
    </table>
    <ul class="word-lists">
        <li ng-repeat="(cat, ws) in categories" ng-class="{collapse: fa}" ng-init="fa=1">
            <div ng-click="fa = !fa"><i class="fa"></i>{{cat}} ({{ws.length}})</div>
            <table ng-repeat="word in ws" class="word-card">
                <tr class="sup"><td ng-repeat="p in word.pronounce track by $index">{{p}}</td><td></td><td></td></tr>
                <tr><td ng-repeat="b in word.ji track by $index">{{b}}</td><td class="tone">{{word.tone}}</td><td class="meaning">{{word.meaning}}</td></tr>
            </table>
        </li>
    </ul>
    total: <span>{{total}}</span>
</div>

<script type="text/javascript">
    angular.module('jpApp', []).filter('match', function() {
        return function(items, query) {
            var ret, i, l, x, j, m;
            if (!query) return [];
            for (ret = [], i = 0, l = items.length; i < l; i += 1) {
                x = items[i];
                for (j = 0, m = x.pronounce.length; j < m; j += 1) {
                    if (x.pronounce[j] === query || x.ji[j] === query) {
                        ret.push(x);
                    }
                }
            }
            return ret;
        }
    }).controller('WordsController', ['$scope', '$http', function($scope, $http) {
        $http.get('/assets/words.json').success(function(data) {
            var p, ws, i, l, x, ji, t, categories = data;
            s = 0;
            words = [];
            for (p in categories) {
                ws = categories[p];
                for (i = 0, l = ws.length, s += l; i < l; i += 1) {
                    v = ws[i].split(' -- ');
                    x = v[0].split('・');
                    ji = x[0].split(' ');
                    p = x[1] ? x[1].split(' ') : [];
                    t = ji.length - p.length;
                    if (t > 0) {
                        p = p.concat(new Array(t));
                    }
                    // else if (t < 0) {
                    //     ji = ji.concat(new Array(-t));
                    // }
                    if (v[1]) {
                        x = v[1].split(' ');
                    }
                    ws[i] = {
                        ji: ji,
                        pronounce: p,
                        tone: x.length > 1 ? x[0] : '',
                        meaning: x.length > 1 ? x[1] : x[0]
                    };
                }
                words = words.concat(ws);
            }
            $scope.categories = categories;
            $scope.words = words;
            $scope.total = s;
        })
    }]);
</script>
{% endraw %}

動詞

      |       辞書形      |         未然形        |    連用形   | 終止形 | 連体形 |    仮定形    |    命令形
------|-----------------:|---------------------:|------------:|-------|-------|-------------|-------------
 五段 | 非る、あうお列 + る | う列 -> あ列，う -> わ | う列 -> い列 |       |       | う列 -> え列 | う列 -> え列
      |                  | う列 -> お列，う -> お |             |       |       |
 上一 |         い列 + る |             る -> x   |    る -> x  |       |       |   る -> れ   |  る -> ろ、よ
 下一 |         え列 + る |             る -> x   |    る -> x  |       |       |   る -> れ   |  る -> ろ、よ
 カ変 |      来「く」 + る |         来「こ」      | 来「き」     |       |       |   る -> れ   |  来「こ」 + い
 サ変 |           す + る |       さ、し、せ       |    し       |       |       |   る -> れ   |  しろ、せよ
       |    促音便 つるう->っ  + て
       | 撥音便 ぬむぶ->ん  + て   |
       | い音便 くぐ->い    + て   |
       |       す->し      + て   |

尊敬语(そんけいご)、谦譲语(けんじょうご)、丁宁语(ていねいご)

- 格助詞（かくじょし）
が、を、　の、　へ、に、で、　と、　から、まで、より
- 接続助詞（せつぞくじょし）
て、で、　ながら、ないで、なくて、し、ば、　から、ので、　が、のに、　とも、ども、と、　
ては、では、　ても、でも、　
けれども、けれど、けど、だが、ですが、たって、だって、　たら、なら、なり、
ところが、ところで、どとろか、もの、もので、ものなら、ものの、ものを、まま、
ため、ゆえ
- 並立助詞（へいりつじょし）
と、や、たり、だり、とか、だの、か、なり、に
- 提示助詞（ていじじょし）
は、も、こそ、しか、さえ、すら、でも、だって、ったら、って、ってば、しも、なんて
- 副助詞（ふくじょし）
ほど、だけ、のみ、ばかり、くらい、ぐらい、きり、ぎり、まで、ずつ、なり、など、なんて、か、やら、とか、だの、ぞ
- 語気助詞（ごきじょし）
か、かしら、ん、ね、ねえ、よ、な、なあ、や、こと、わ、ぞ、ぜ、え、い、もの、さ、の、かな、とも、っけ
- 使役助動詞
せる、させる
- 受身助動詞
れる、られる、される
- 可能助動詞
れる、られる
- 自発助動詞・尊敬助動詞
れる、られる
- 希望助動詞
たい、たがる
- 様態助動詞
そうだ
- 比泀助動詞
ようだ、みたいだ
- 過去（完了）助動詞
た（だ）
- 否定助動詞
ない、ぬ（ん）
- 推量助動詞
う、よう、まい、らしい
- 断定助動詞
だ、である
- 伝聞助動詞
そうだ
-

-




- は
    + 提示助词。强调主语或其他助词，发わ的音。如：私は　学生では　ありません。前一个“は”强调主语“我”，后一个“は”强调“学生で”状态的否定。

-
目的語　が　自動詞
　　　　　　可能形
　　　　　　受身形
　　　　　　形容動詞
　　　　　　形容詞
    * が，格助词。〜が，后接表示存在、愿望、能力或现象的动词或形容动词，构成宾语。如：犬が　います。コーヒーが　好きです。

-
目的語　を　他動詞
　　　　　　使役形
    * を，格助词。〜を，加前面的目的名词构成之后他动词的宾语。如：ご飯を　食べます。

-
名詞　は
    * は，提示助词，发わ的音。〜は，提示前面的主语。
名詞　も。
    * も，提示助词。当之前陈述相同时，用 〜も 代替 〜は 提示主语。如：私も　会社員です。
疑問詞　も　否定
    * 全面否定，如：どこも　行きません。

-
名詞　です。
　　　でした。
　　　では　ありません。
　　　じゃ　ありません。
　　　では　ありませんでした。
    * です，助动词。是或在，だ（男生）、なの的丁宁语（礼貌语、郑重语）。古语である的简写。
    * だ，助动词。〜だ，表示是或决心、断定，加前面的部分构成谓语。如：いい天気だ。
    * なの，形容动詞的连体形~な + 准体助词の。
    * でした，助动词。です的过去时。
    * で，助动词。〜だ 的连用形，表示中顿，如：此れは本で、其れはノートです；否定，如：〜では　ありません。
    * た，助动词。表示动作完成。
    * じゃ，接续词。口语化的では。
    * ありません，あります的否定形，ない的丁宁语。
    * あります，在（あ）る的丁宁语连用形。
    * ありませんでした，ありません的过去时。

-
形容動詞　です。
　　　　　でした。
　　　　　では　ありません。
　　　　　じゃ　ありません。
　　　　　では　ありませんでした。
    * 形容動詞，也称为な形容词。
    * 参见名词。

-
　　　形容詞　です。
〜い -> かっ　たです。
〜い -> く　　ないです。
〜い -> く　　なかったです。
    * です，助动词。是，丁宁语（礼貌语、郑重语）。
    * かったです，〜かった的丁宁语。
    * かった。い形容词的连用形かっ + た 表示过去。
    * た，助动词。〜た，表示过去，如：寒かった、来ました。
    * くない，い形容词的连用形く + ない 表示否定。
    * くなかった，い形容词的连用形く + ない的过去式なかった，表示过去否定。
    * ない，助动词。〜ない，表示否定，如：寒くない、家にいない。连用形变化比照形容词，い -> かっ。

-
動詞　ます。
　　　ました。
　　　ません。
　　　ませんでした。
    * ます，助动词。〜ます，丁宁语（礼貌语、郑重语）。
    * ました，助动词。ます的过去时。
    * ません，ます的否定形。
    * ませんでした，ません的过去时。

-
〜か。
    * か，终助词。〜か，疑问语气。
〜か、〜か。
    * 表示选择疑问。如：これは　「７」ですか、「９」ですか。

-
〜ね
    * ね，终助词。〜ね，感叹语气，确认或赞同。如：そうですね。
〜よ
    * よ，终助词。〜よ，强调语气。如：だめですよ。

-
名詞　の　名詞
    * の，格助词。〜の〜，相当于汉语的“的”，表示关系或所属，当后一名词是产品，而前一名词是国家或公司，表示出处。

形容動詞　な　名詞
    * な形容词 + な，修饰名词。

形容詞　名詞
    * い形容词直接放名词前，修饰名词。

-
名詞　と　名詞 「と」
    * と，格助词。〜と〜，相当于汉语的“和”，与や不同的是，と是全部列举，や是部分列举。如：庭に木と花があります。
名詞　や　名詞　「等（など）」
    * や，副助词。表示~和~等，与と不同的是，と是全部列举，や是部分列举。如：庭に木や花があります。
    * 等「など」，副助词。表示等等。
名詞　とか　名詞　とか
    * とか，并列助詞。表示~和~等，也是部分列举，与や不同的是，最后名词や可省略，とか每个名词后面都要跟。如：庭に木とか花とかあります。
〜たり
    * たり，并列助词。表示有时~有时~，或~或~，也是部分列举。如：見たり聞いたりしたこと。

人、動物　と 動詞
    * と，格助词。〜と，和谁一起干某事。

-
〜と
    * と，格助词。表示引用的内容。如：彼は行くといった。
〜も
    * も，係助词。表示强调。如：餃子は20個も食べた。
〜ほど
    * ほど，接续助詞。表示程度。如：舌がとろけるほどおいしい。
時間　ほど
    * ほど，接助詞。〜ほど，表示大概时间段。如：１時間ほど。
時間　頃「ごろ」
    * ごろ，接续助詞。〜ごろ，表示大概时间点。如：１時ごろ。
〜くらい
    * くらい，副助詞。表示程度或左右。如：十本くらいある。こんな事くらい子供でも知っている。
〜だけ
    * だけ，副助词。只~。如：君にだけ話す。
〜しか〜ない
    * しか，副助词。除了~，しか〜ない，只，仅。如：簡単な日本語しか話せない。
〜ばかり／ばっかり
    * ばかり，副助词。全是。如：人ばっかりです。


-
時間　に　動詞
    * に，格助词。〜に，表示动作发生的时间点。如：9時に　起きます。
人、動物　に　動詞
    * に，格助词。〜に，表示动作的对象。如：友達に　会います。
期間　に
    * に，格助词。〜に，表示比较的基准。如：一週間に　3回　日本語を　勉強します。
動詞連用形　に　移動動詞
名詞
    * に，格助词。〜に，前一个动作 + に 表示后续移动动词的目的。如：本を　買いに　行く。
場所　に　動詞
    * に，格助词。〜に，表示动作存在的场所，和で不同的是时间较长。如：庭に　木が　有ります。
場所　に　動詞
    * に，格助词。〜に，表示动作到达点。如：喫茶店に　入ります。
場所　へ　移動動詞
    * へ，格助词，发え的音。〜へ，表示移动的方向。如：何処へ　行きますか。
場所　を　動詞
    * を，格助词。〜を，与で不同的是，を表示强调移动的动作。如：喫茶店を　出ます。公園を　散歩する。
場所　で　動詞
    * で，格助词。〜で，表示动作发生的场所，和に不同的是时间较短。如：会社で　働きます，公園で　散歩する。
道具、手段　で　動詞
    * で，格助词。〜で，表示采用的工具，手段。如：バスで　来ました。
期間、範囲　で
    * で，格助词。〜で，表示时间，空间的范围。如：家族で　誰が　料理が　一番　上手ですか。
状態 で
    * で，格助词。〜で，表示状态。如：このままでいいです。
状態、程度 で
    * で，格助词。〜で，表示状态，程度。如：このままでいいです。３個で150円です。
理由・原因 で
    * で，格助词。〜で，表示原因。如：運動会は雨で中止になりました。

-
名詞　から
    * から，格助词。〜から，从~。
名詞　まで
    * まで，格助词。〜まで，到~。
名詞　より
    * より，格助词。〜より，来自~，比から更加正式。如：田中より。
名詞　より
    * より，格助词。〜より，表示比较的基准。如：北京は東京より寒い。
名詞　ほど
    * ほど，接续助詞。〜ほど，表示比较，强调程度，往往跟否定。如：東京は北京ほど寒くない。

-
何（ど）れ
    * どれ，代词。哪个，询问物品。
何処（どこ）
    * どこ，代词。哪里，询问地点。
誰（だれ）
    * だれ，代词。谁，询问人物。
何方（どちら）
    * どちら，代词。どこ和だれ的敬称，哪位或哪里，可以询问地点或人物。
何
    * なに，なん，代词。都是什么的意思，日文汉字也一样，后续是た、だ、な行或带量词时用なん。
何（なん）　の　名詞
    * 何の + 名词，询问的是内容，如：何の本ですか。日本語の本です。
どんな　名詞
    * どん，形容動詞。どんな + 名词，询问的是状态，如：どんな本ですか。面白い本です；也表示询问范畴，如：どんな映画が　好きですか。アニメが　好きです
。
何（なん）　助数詞
    * 询问带量词的数量用 なん + 量词。
幾（いく）つ
    * 询问不带量词的数量用 いくつ。
    * いく，接头词。几，多少的意思。
    * つ，名词。个，岁。
何時（いつ）
    * 询问时间点用いつ。
何（ど）の位（くらい）
    * 询问时间的长度用いくつ。
    * どの，连体词。怎样的。
    * くらい，名词。程度。
どうやって
    * どうやって，怎么做，询问顺序或方法。どうやる的て形。
    * 遣（や）る，动词。做、干。

-
疑問詞　か
    * か，副助词。疑問詞 + か 表示某物，某人，某处等。如：何処か、何（なに）か。

-
よく->大体（だいたい）->少（すこ）し -> あまり->全然（ぜんぜん）
たくさん -> 少し -> あまり->全然
    * 都是副词，从左到右，程度由重到轻，从あまり开始用于否定。第一行形容东西的大小，第二行形容东西的多少。

-
〜が、〜。
〜けれども、〜。
〜けれど、〜。
〜けど、〜。
    * が，接续助词。表示转折，虽然~但是~。如：家は小さいですが、綺麗です。
    * けれども，接续助词，同上，比が更口语化，即使~也~。口语化程度，が → けれども → けれど → けど。
〜のに〜。
    * のに，接续助词。表示转折，语气较强，往往表示惊讶或遗憾。如：安いのに買わなかった。
動詞、形容詞　ても〜
名詞、形容動詞　でも〜
    * ても，接续助词。表示转折，即使~也~。如：雨が降っても行く。

-
〜から〜
    * から，接续助词。表示原因，如：約束が　ありますから、早く　帰ります。
動詞、形容詞　ので
形容動詞、名詞　な　ので
    * ので，接续助词。表示原因，から偏向主观，ので偏向客观。如：お腹が痛いので、帰らせていただきます。
〜為（ため）〜
    * ため，接续助词。表示原因，比から和ので都正式。如：寒さのために死ぬ。
〜によって、〜
    * によって，动词。表示原因，由于~。如：人によって習い方が違う。表示由，如：この授業はわたしによって教えられる。
〜ために〜
    * ために。为了~，较强的主观意愿。如：留学するために、日本語を習っています。
〜ように〜
    * ように。为了~，相比ために更客观，前面要接动词的可能行，～できるように。如：留学できるように、日本語を習っています。
〜には〜
    * には，に表示目的，再加上は进行强调，如：留学できるには、日本語を習っています

〜ながら〜。
    * ながら，接续助词。表示一边~一边~，如：ご飯を食べながら　テレビを見ます。
動詞連用形　て「から」、〜。
    * て，接续助词。其れから，表示连续发生的动作，相当于“然后”。如：晩ご飯を　食べて、映画を　見ます。
    * てから，比单纯用て先后关系更明确。如：働きてから、お酒を　飲みましょう。
形容詞　て　形容詞
形容動詞　で　形容詞
    * て，接续助词。そして，表示并列，相当于“并且”。如：美味しいて安い、綺麗で優しい。
形容詞　て　〜
形容動詞　で　〜
    * て，接续助词。それで・だから，表示客观原因。如：暗くて見えない。

-
動詞連用形　たい
    * たい，助动词。表示想要，动作发起者不能是第三方。活用同形容词。如：休みたいです。
動詞連用形　て　ください
    * 请~，动作发起者是听话人，接受者是自己。如：見せて　ください。
    * 否定形式是，動詞未然形 ないで　ください。请不要~，动作发起者是听话人。如：煙草を　吸わないで　ください。
    * て，终助词。〜て，委婉的命令。
    * ください，くださる的命令形。
    * 下（くだ）さる，动词。给我，呉（く）れる的尊敬語。
他動詞連用形　て　ある
自動詞連用形　て　いる
    * 〜てある，表示处于某种状态，是由某人实施动作导致的结果。如：窓が　開けて　あります。
    * 〜ている，表示正处于的状态，并不关心动作实施的人。如：雨が　降って　います。或习惯性行为，如：大学で　勉強して　います。或动作结果的状态，如：知って　います。
    * て，接续助词。動詞連用形 + て 构成后续动作的补语。
動詞連用形　て　ましょう
　　　　　　　　見（み）る
　　　　　　　　了（しま）う
　　　　　　　　行（い）く・来（く）る
　　　　　　　　欲（ほ）しい
　　　　　　　　置（お）く
　　　　　　　　上（あ）げる・貰（もら）う・呉（く）れる
    * 〜てましょう，建议做什么。如：食べましょう。
    * 〜て見る，试试看。如：食べて　見る。
    * 〜て了う，表示动作完结。如：もう　読んで　了いました。
    * 〜て行く、〜て来る，表示移动趋势。如：自動車が、入って行きました。自動車が、出て来ました。
    * 〜て欲（ほ）しい，表示想要他人干什么，たい是自己想要干什么。如：買って欲しい。（想要别人给买）
    * 〜て置く，表示为某种目的而进行的动作。如：明日は試験ですから、勉強して置きます。
    * 〜て上げる、〜て貰う、〜て呉れる，建议做什么。如：先生に　日本語を　教えて　貰います。
    * て，接续助词。動詞連用形 + て 构成后续动作的补语。
動詞連用形　て　も　いいです
    * 可以做什么。如：写真を　撮っても　いいです。
動詞連用形　ても、〜
    * 即使~，也。如：辞書を　見ても、分かりませんでした。
動詞連用形　て　は　行（い）けません
    * 行けません，行けます的否定形。不可以做什么。如：写真を　撮っては　行けません。
    * 行けます，行ける的丁宁语连用形。
    * 行ける，动词。行，会，可以。