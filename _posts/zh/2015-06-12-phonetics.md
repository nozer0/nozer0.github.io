---
layout: post
title: 语音学习
categories: zh linguistics phonetics
language: zh
tags: linguistics phonetics ipa

description:
---

<style>
	p img { width: 150px; }
	img { width: 250px; }
	p { clear: both; }
	table img {
		width: 100%;
		max-width: 200px;
		vertical-align: bottom;
	}
	table td { word-break: normal; text-align: right; }
	table th:first-child { min-width: 48px; }
	table th:nth-child(20n+3) { min-width: 36px; }
	table th:nth-child(20n+4) { min-width: 42px; }
	table th:nth-child(20n+5) { min-width: 37px; }
	table th:nth-child(20n+14) { min-width: 35px; }
	em:hover { cursor: pointer; text-decoration: underline; }
	pre { background: url('/assets/img/vowel_bg.png') no-repeat 66px 17px; font-family: courier; }
	pre em { background: #f8f8f8; padding: 0 2px; }
	pre i { display: inline-block; }
	h5 { text-indent: 1em; }
</style>

语音学(phonetics)，是研究语音发音分类，产生，及如何发音的学科。音韵学(phonology)，又称音系学，音位学，是研究语音在具体某种语言运用的规则的学科，如汉语音韵学。上述两者都是语言学(linguistics)的分支学科。

- [音素(phone)]({{ page.url }}#phone)
- [音位(phoneme)]({{ page.url }}#phoneme)
- [音节(syllable)]({{ page.url }}#syllable)
- [国际音标(IPA)]({{ page.url }}#ipa)
- [清浊音(voice)]({{ page.url }}#voice)
- [气流机制(airstreams)]({{ page.url }}#airstreams)
	- [肺部呼气音(pulmonic egressive)]({{ page.url }}#pulmonic)
		- [阻碍音(obstruent)]({{ page.url }}#obstruent)
			- [塞音(stop)]({{ page.url }}#stop)
			- [擦音(fricative)]({{ page.url }}#fricative)
			- [塞擦音(affricate)]({{ page.url }}#affricate)
		- [响音(sonorant)]({{ page.url }}#sonorant)
			- [鼻音(nasal)]({{ page.url }}#nasal)
			- [闪音(flap)]({{ page.url }}#flap)
			- [颤音(trill)]({{ page.url }}#trill)
			- [近音(approximant)]({{ page.url }}#approximant)
			- 元音(vowel)
		- [边音(lateral)]({{ page.url }}#lateral)
	- [声门音(glottalic)]({{ page.url }}#glottalic)
		- [喷音(ejective)]({{ page.url }}#ejective)
		- [内爆音(implosive)]({{ page.url }}#implosive)
	- [搭嘴音(ligual/click)]({{ page.url }}#ligualclick)
- [元音(vowel)]({{ page.url }}#vowel)
	- [单元音(monophthong)]({{ page.url }}#monophthong)
		- [闭元音(close vowel)]({{ page.url }}#close-vowel)
		- [次闭元音(near-close vowel)]({{ page.url }}#near-close-vowel)
		- [半闭元音(close-mid vowel)]({{ page.url }}#close-mid-vowel)
		- [中元音(mid vowel)]({{ page.url }}#mid-vowel)
		- [半开元音(open-mid vowel)]({{ page.url }}#open-mid-vowel)
		- [次开元音(near-open vowel)]({{ page.url }}#near-open-vowel)
		- [开元音(open vowel)]({{ page.url }}#open-vowel)
	- [半元音(semivowel)]({{ page.url }}#semivowel)
	- [复元音(compound vowel)]({{ page.url }}#compound-vowel)
- [辅音(consonant)]({{ page.url }}#consonant)
	- [发音部位(places of articulation)]({{ page.url }}#places)
		- [唇(labial)]({{ page.url }}#labial)
			- [双唇(bilabial)]({{ page.url }}#bilabial)
			- [唇齿(labiodental)]({{ page.url }}#labiodental)
			- [齿唇(dentolabial)]({{ page.url }}#dentolabial)
		- [舌冠(coronal)]({{ page.url }}#coronal)
			- [舌唇(linguolabial)]({{ page.url }}#linguolabial)
			- [齿间(interdental)]({{ page.url }}#interdental)
			- [齿(dental)]({{ page.url }}#dental)
			- [齿龈(alveolar)]({{ page.url }}#alveolar)
			- [齿龈后(postalveolar)]({{ page.url }}#postalveolar)
			- [颚龈(palato-alveolar)]({{ page.url }}#palato-alveolar)
			- [卷舌(retroflex)]({{ page.url }}#retroflex)
		- [舌背(dorsal)]({{ page.url }}#dorsal)
			- [龈硬腭(alveolopalatal)]({{ page.url }}#alveolopalatal)
			- [硬腭(palatal)]({{ page.url }}#palatal)
			- [唇硬腭(labial-palatal)]({{ page.url }}#labial-palatal)
			- [软腭(velar)]({{ page.url }}#velar)
			- [唇软腭(labial–velar)]({{ page.url }}#labial–velar)
			- [小舌(uvular)]({{ page.url }}#uvular)
		- [喉(larynɡeal)]({{ page.url }}#larynɡeal)
			- [咽喉(pharyngeal)]({{ page.url }}#pharyngeal)
			- [会厌(epiglottal)]({{ page.url }}#epiglottal)
			- [声门(glottal)]({{ page.url }}#glottal)
	- [辅音列表(consonant chart)]({{ page.url }}#consonant-chart)
- [变音符号(diacritic)]({{ page.url }}#diacritic)
	- [音节(syllabicity)]({{ page.url }}#syllabicity)
	- [除阻(consonant-release)]({{ page.url }}#consonant-release)
	- [发音(phonation)]({{ page.url }}#phonation)
	- [发音部位(articulation)]({{ page.url }}#articulation)
	- [协同发音(co-articulation)]({{ page.url }}#co-articulation)
- [超音段(suprasegmentals)]({{ page.url }}#suprasegmentals)
	- [重音(stress)]({{ page.url }}#stress)
	- [音长(length)]({{ page.url }}#length)
	- [联诵(linking)]({{ page.url }}#linking)
	- [声调(tone)]({{ page.url }}#tone)


## 音素(phone)<a id="phone"></a>

人类发出的各种声音统称为语音。

只区别音的不同，如清双唇塞音[ *p* ]和浊双唇塞音[ *b* ]，是不同的语音，[ *p* ]和送气音[ *pʰ* ]也是不同的语音。


## 音位(phoneme)<a id="phoneme"></a>

音位是人类语言中能够区别意义的最小声音单位，有时也称音素，即表示同一意义的语音集合。

举例来说，清双唇塞音[ *p* ]及送气音[ *pʰ* ]，即汉语拼音的b和p，在汉语中是区别不同意义的，波[ pɔ ]和坡[ pʰɔ ]是不同的，因此在汉语中他们属于不同音位。但在英语中是不作区分的，pen[ pʰen ]一般都标为/ pen /，因此在英语中他们属于同一音位。音位标音没有语音标音那么精确，一般用斜线'/ /'作为边界，而语音标音则用方括号'[ ]'。


## 音节(syllable)<a id="syllable"></a>

音节是自然语音结构单位，通常一个音节包含一个音节核，通常是元音，以及首尾可能有的界音，通常为辅音。比如，英文better[bɛɾɚ]，就是[bɛ]和[ɾɚ]两个音节。


## 国际音标(IPA)<a id="ipa"></a>

国际音标，简称IPA，International Phonetic Alphabet，是用来标示语音的一套标准化系统。目前共107个单独字母，包括28个 **元音(vowel)**，59个 **肺部气流辅音(pulmonic consonant)**，5个 **搭嘴音(click)**，5个 **内爆音(implosive)**及其余10个辅音符号。另外还有52个变音符号，19个超音段成分。使用方括号'[ ]'来标示发音细节，如[ pʰen ]，而'/ /'则用来标示音位。


## 清浊音(voice)<a id="voice"></a>

发音时声带振动的音称为浊音，反之为清音。辅音有清有浊，而大多数元音都是浊音。


## 气流机制(airstreams)<a id="airstreams"></a>

根据气流产生的源头可分为肺部气流，声门气流，舌面气流。

### 肺部呼气音(pulmonic egressive)<a id="pulmonic"></a>

绝大部分辅音和所有的元音都是采用这种方式，根据发音方法(manners of articulation)又可细分为塞音，擦音，近音和元音，阻碍程度依次减小。从语言发音本身来，也趋向于更弱的阻碍程度，称为辅音弱化，比如某些塞音转为擦音，[ *p* ]变为[ *ɸ* ]。

#### 阻碍音(obstruent)<a id="obstruent"></a>

阻碍气流发出的声音，与响音相对。

##### 塞音(stop)<a id="stop"></a>

也称为 **爆破音(plosive)**，阻塞一瞬，突然爆破发出的声音，如双唇塞音[ *b* ]、[ *p* ]，齿龈塞音[ *t* ]、[ *d* ]等。

##### 擦音(fricative)<a id="fricative"></a>

气流摩擦产生的声音，可持续一段时间，如唇齿擦音[ *f* ]、[ *v* ]，齿龈擦音[ *s* ]、[ *z* ]等。分为 **有咝擦音(sibilant)** 和 **无咝擦音(non-sibilant)**。

##### 塞擦音(affricate)<a id="affricate"></a>

由同一器官先发塞音，迅速转为擦音收尾。通常由一个塞音和一个擦音中间用上连字符或下连字符表示，如[ *p͡f* ]或[ *p͜f* ]，也有用上标表示，如[ *pᶠ* ]。

#### 响音(sonorant)<a id="sonorant"></a>

与阻碍音相反，发音时气流不受阻碍，因此可以持续发音。

##### 鼻音(nasal)<a id="nasal"></a>

顾名思义，气流通过鼻腔发音，如双唇鼻音[ *m* ]和齿龈鼻音[ *n* ]等。

##### 闪音(flap)<a id="flap"></a>

也称 **弹音(tap)**，舌尖卷起，与齿龈或上颚接触迅速弹开，和塞音有相似，时间更短促。如齿龈闪音[ *ɾ* ]、齿龈边闪音[ *ɺ* ]、卷舌闪音[ *ɽ* ]等。

##### 颤音(trill)<a id="trill"></a>

也称滚音，与闪音不同，发音器官之间有多次接触，持续时间较长。如双唇颤音[ *ʙ* ]、舌尖颤音[ *r* ]、小舌颤音[ *ʀ* ]等。

##### 近音(approximant)<a id="approximant"></a>

也称无擦通音，介于擦音与元音之间。硬腭近音对应于前元音，软腭近音对应于后元音，没有对应元音的则称为 **流音(liquid)**，常见的流音有[ *l* ]和[ *ɹ* ]。

比如，与闭半元音对应的四个近音。

- 浊硬腭近音[ *j* ] —— 闭前不圆唇元音[ *i* ]
- 唇硬腭浊近音[ *ɥ* ] —— 闭前圆唇元音[ *y* ]
- 浊软腭近音[ *ɰ* ] —— 闭后不圆唇元音[ *ɯ* ]
- 浊唇软腭近音[ *w* ] —— 闭后圆唇元音[ *u* ]

##### 元音(vowel)

见[元音](#vowel)。

#### 边音(lateral)<a id="lateral"></a>

发音时气流从舌头两边通过，可用符号[ *oˡ* ]表示。古汉语称为半舌音，如[ *l* ]。对应于各类发音，分别有边塞擦音，如[ *t͡ɬ* ]，边擦音，如[ *ɬ* ]，边闪音，如[ *ɺ* ]，边近音，如[ *l* ]。

### 声门音(glottalic)<a id="glottalic"></a>

#### 喷音(ejective)<a id="ejective"></a>

即声门呼气音(glottalic egressive)，也称喷音，声门闭合，通过喉头上升压缩口腔内空气，在除阻时喷出。用塞音、擦音或塞擦音加撇号[ oʼ ]表示。如[ *pʼ* ]，[ *tʼ* ]。

#### 内爆音(implosive)<a id="implosive"></a>

即声门吸气音(glottalic ingressive)，先是口腔成阻，声带振动，然后降低喉头，压低舌位，鼓起脸颊，以扩大口咽腔容积，造成口腔内空气稀化，气压降低，结果在除阻时，口腔内气压低于口腔外的大气压，气流从外向内冲入，造成往内爆发的塞音。用浊塞音的符号在顶部加弯曲小勾表示，如[ *ɓ* ]、[ *ɗ* ]。

### 搭嘴音(ligual/click)<a id="click"></a>

即舌面吸气音(lingual ingressive)或软腭吸气音(velaric ingressive)，舌头由接触软腭到迅速离开，将空气吸入产生声音。也叫做吮吸音、咂嘴音或喌(zhōu)音，如[ *ʘ* ]、[ *ǀ* ]。


## 元音(vowel)<a id="vowel"></a>

也称母音，与辅音相对，发音时气流不受阻碍。属于响音。

### 单元音(monophthong)<a id="monophthong"></a>

由嘴唇闭合度分为闭、次闭、半闭、中、半开、次开、开七个层次，又舌头有前、次前、央、次后、后五个不同位置，再加上是否圆唇的区别，三者交杂组合成28个单独的元音符号，还有其余变音符号修饰的元音。详见下图。

<pre>
       Front Near-​front Central Near-​back Back
     Close<em>i</em><em>y</em><i style="width:106px;"></i><em>ɨ</em><em>ʉ</em><i style="width:100px;"></i><em>ɯ</em><em>u</em>

Near-close<i style="width:86px;"></i><em>ɪ</em><em>ʏ</em><i style="width:31px;"></i><em>ɪ̈</em><em>ʊ̈</em><i style="width:38px;"></i><em>ʊ</em>
 Close-mid<i style="width:37px;"></i><em>e</em><em>ø</em><i style="width:87px;"></i><em>ɘ</em><em>ɵ</em><i style="width:83px;"></i><em>ɤ</em><em>o</em>

       Mid<i style="width:68px;"></i><em>e̞</em><em>ø̞</em><i style="width:69px;"></i><em>ə</em><em>ɵ̞</em><i style="width:68px;"></i><em>ɤ̞</em><em>o̞</em>
  Open-mid<i style="width:87px;"></i><em>ɛ</em><em>œ</em><i style="width:59px;"></i><em>ɜ</em><em>ɞ</em><i style="width:64px;"></i><em>ʌ</em><em>ɔ</em>

 Near-open<i style="width:120px;"></i><em>æ</em><i style="width:57px;"></i><em>ɐ</em>
      Open<i style="width:128px;"></i><em>a</em><em>ɶ</em><i style="width:37px;"></i><em>ä</em><em>ɒ̈</em><i style="width:42px;"></i><em>ɑ</em><em>ɒ</em>

</pre>

#### 闭元音(close vowel)<a id="close-vowel"></a>

舌头尽量接近上腭，是舌面位置最高的元音，也被称为高元音。

- 闭前不圆唇元音[ *i* ]，如汉语拼音的i，日语的い，以及英语的i。
- 闭前圆唇元音[ *y* ]，如汉语拼音的ü。
- 闭央不圆唇元音[ *ɨ* ]，在汉语拼音中也用[ *ʅ* ]来标示拼音zhī、chī、shī的元音，该符号未被IPA收入。
- 闭央圆唇元音[ *ʉ* ]，辅音中与之对应的是浊双唇近音[ *β̞* ]。也用[ *ʯ* ]表示，不过该符号未被IPA收入。
- 闭后不圆唇元音[ *ɯ* ]，如汉语拼音zī、cī、sī的元音，日语的う，在汉语拼音中也用[ *ɿ* ]来标示，该符号同样未被IPA收入。
- 闭后圆唇元音[ *u* ]。也用[ *ʮ* ]表示，不过该符号未被IPA收入。

#### 次闭元音(near-close vowel)<a id="near-close-vowel"></a>

- 次闭次前不圆唇元音[ *ɪ* ]
- 次闭次前圆唇元音[ *ʏ* ]
- 次闭次后圆唇元音[ *ʊ* ]

#### 半闭元音(close-mid vowel)<a id="close-mid-vowel"></a>

- 半闭前不圆唇元音[ *e* ]
- 半闭前圆唇元音[ *ø* ]
- 半闭央不圆唇元音[ *ɘ* ]
- 半闭央圆唇元音[ *ɵ* ]，符号并不是希腊字母θ，比起清齿无咝擦音[ *θ* ]的符号要更扁。
- 半闭后不圆唇元音[ *ɤ* ]
- 半闭后圆唇元音[ *o* ]

#### 中元音(mid vowel)<a id="mid-vowel"></a>

不考虑变音符号修饰的元音，中元音就只有一个。

- 中前不圆唇元音[ *e̞* ]，如日语的え，也用非IPA标准的小型大写字母[ *ᴇ* ]表示。
- 中央元音[ *ə* ]
- 中后圆唇元音[ *o̞* ]，如日语的お。

#### 半开元音(open-mid vowel)<a id="open-mid-vowel"></a>

- 半开前不圆唇元音[ *ɛ* ]
- 半开前圆唇元音[ *œ* ]
- 半开央不圆唇元音[ *ɜ* ]
- 半开央圆唇元音[ *ɞ* ]
- 半开后不圆唇元音[ *ʌ* ]
- 半开后圆唇元音[ *ɔ* ]

#### 次开元音(near-open vowel)<a id="near-open-vowel"></a>

- 次开前不圆唇元音[ *æ* ]
- 次开央元音[ *ɐ* ]

#### 开元音(open vowel)<a id="open-vowel"></a>

与闭元音相反，舌面尽量远离上颚，因此也称为低元音。

- 开前不圆唇元音[ *a* ]
- 开前圆唇元音[ *ɶ* ]
- 开央不圆唇元音[ *ä* ]，如日语的あ，也用非IPA标准的小型大写字母[ *ᴀ* ]表示。
- 开后不圆唇元音[ *ɑ* ]
- 开后圆唇元音[ *ɒ* ]

### 半元音(semivowel)<a id="semivowel"></a>

也称滑音，是指和其余元音一起构成复元音的不成音节音。在辅音中与之相似的是近音，但近音发音口腔更加闭合。用半音节符[ *o̯* ]表示，如[ ɑɪ̯ ]。

### 复元音(compound vowel)<a id="compound-vowel"></a>

与单元音(monophthong)相对，大多数复元音是双元音(diphthong)，即由两个单元音组成，通常后面的是半元音，如汉语拼音的ai[ ɑɪ̯ ]，也有少部分是三元音(triphthong)，如英语的fire[ faɪ̯ə̯ ]。


## 辅音(consonant)<a id="consonant"></a>

也称子音，与元音相对，发音时气流受到阻碍。根据发音方法，气流机制或发音部位等有不同的分类方式。如分为 **肺部气流音(pulmonic consonant)**，**非肺部气流音(non-pulmonic consonant)** 以及 **协同发音(co-articulated consonant)**。  
肺部气流音有根据发音方法分为塞音，擦音等，或者按发音部位分为唇音，齿音等。非肺部气流音则包括 **搭嘴音(click)**，**内爆音(implosive)** 以及 **喷音(ejective)**。

### 发音部位(Places of articulation)<a id="places"></a>

![发音部位](/assets/img/ariticulation/places_of_articulation.png)
<small>发音部位 (主动与被动)：1.外唇、2.内唇、3.牙齿、4.齿龈、5.齿龈后部、6.硬颚前部、7.硬颚、8.软颚、9.小舌、10.咽腔壁、11.声门、12.会厌、13.舌根、14.舌面后、15.舌面前、16.舌叶、17.舌尖、18.舌尖下部</small>
根据不同的发音部位分为唇，舌冠，舌背，喉几大类，每类下面又各有细分。

#### 唇(labial)<a id="labial"></a>

唇音化用[ *oʷ* ]表示

##### 双唇(bilabial)<a id="bilabial"></a>

![双唇音](/assets/img/ariticulation/bilabial.png)

古汉语称为重唇音，包括

- 浊双唇鼻音[ *m* ]，如汉语拼音的m和英语的m，以及日语的ま行。
- 清双唇塞音[ *p* ]，如汉语拼音的b，英语s后的p。有多个变体，唇音[ *pʷ* ]，送气音，即汉语拼音的p和英语重音的p[ *pʰ* ]，颚音[ *pʲ* ]，唯闭音[ *p̚* ]，浊化音[ *p̬* ]，喷音[ *pʼ* ]。
- 浊双唇塞音[ *b* ]，如英语的b，日语的ば行。也有多个变体，唇音[ *bʷ* ]，半唇音[ *b̜ʷ* ]，强唇音[ *b̹ʷ* ]，漏气音[ *bʱ* ]，颚音[ *bʲ* ]。
- 清双唇无咝擦音[ *ɸ* ]，由希腊字母φ[ faɪ ]而来，但并不相同。如日语的ふ[ ɸɯ ]。
- 浊双唇无咝擦音[ *β* ]，符号是希腊字母β[ beɪtə ]。
- 浊双唇近音[ *β̞* ]，以浊双唇擦音为基础的降音[ o̞ ]，与闭央圆唇元音[ *ʉ* ]对应。
- 浊双唇颤音[ *ʙ* ]，不同于英文符号的B。
- 清双唇喷音[ *pʼ* ]
- 浊齿龈内爆音[ *ɓ* ]，符号是b右上角加个弯钩。
- 双唇搭嘴音[ *ʘ* ]

##### 唇齿(labiodental)<a id="labiodental"></a>

![唇齿音](/assets/img/ariticulation/labiodental.png)

上齿和下唇咬合。古汉语称为轻唇音。

- 浊唇齿鼻音[ *ɱ* ]，例如，英语中在[ f ]或[ v ]音之前的m，symphony[ sɪɱfəni ]。
- 清唇齿塞音[ *p̪* ]和浊唇齿塞音[ *b̪* ]，旧时在美式英语中常用[ ȹ ]和[ ȸ ]表示。
- 清唇齿塞擦音[ *p̪͡f* ]和浊唇齿塞擦音[ *b̪͡v* ]。
- 清唇齿无咝擦音[ *f* ]，如汉语拼音的f和英语的f。
- 浊唇齿无咝擦音[ *v* ]，如英语的v及一些汉语方言中。
- 浊唇齿近音[ *ʋ* ]
- 浊唇齿闪音[ *ⱱ* ]，近音是v右边向里弯，而闪音是v右边向外弯。
- 清唇齿挤喉擦音[ *fʼ* ]
- 唇齿搭嘴音[ *ʘ̪* ]

##### 齿唇(dentolabial)<a id="dentolabial"></a>

下齿和上唇咬合，用双唇音的齿化[ *o͆* ]表示。我们会看到有些齿化的变音符号是上标[ o͆ ]，而唇齿音的齿化符号通常是下标[ o̪ ]。实际上要修饰降部的音标时，会使用上标，其余则是下标，和齿唇或唇齿音并没有关系。

#### 舌冠(coronal)<a id="coronal"></a>

利用舌头前部（舌尖[ *o̺* ]或舌叶[ *o̻* ]）接近或接触不同部位发出声音。注意，舌尖音的符号和齿化符号很像，前者开口向上，后者开头向下。

##### 舌唇(linguolabial)<a id="linguolabial"></a>

![舌唇音](/assets/img/ariticulation/linguolabial.png)

舌尖或舌叶在上唇，有两类表示方式，用齿龈音的舌唇化[ *o̼* ]或双唇音的舌尖化[ *o̺* ]表示。

- 浊舌唇鼻音[ *n̼* ]，也表示为[ *m̺* ]。
- 清舌唇塞音[ *t̼* ]或[ *p̺* ]和浊舌唇塞音[ *d̼* ]或[ *b̺* ]。
- 浊舌唇前鼻塞音[ *n̼͡d̼* ]或[ *m̺͡b̺* ]。
- 清舌唇无咝擦音[ *θ̼* ]或[ *ɸ̺* ]和浊舌唇无咝擦音[ *ð̼* ]或[ *β̺* ]。
- 浊舌唇颤音[ *r̼* ]或[ *ʙ̺* ]。
- 舌唇搭嘴音[ *ǀ̼* ]，[ *ʇ̼* ]或[ *ʘ̺* ]。

##### 齿间(interdental)<a id="interdental"></a>

舌尖处在上下齿之间，用前化音[ *o̟* ]表示，或者更准确的[ *o̪͆* ]。

- 清舌唇擦音[ *θ̟* ]和浊舌唇擦音[ *ð̟* ]，如美式英语中的th，英式中则发齿音[ *θ* ]和[ *ð* ]。

##### 齿(dental)<a id="dental"></a>

![齿音](/assets/img/ariticulation/dental.png)

舌尖上顶门牙，用齿龈音的齿化[ *o̪* ]表示，也称舌尖前音、齿间音。部分唇齿音也是齿化，但是是用双唇音作为基础。

- 浊齿鼻音[ *n̪* ]，如英语中[ θ ]或[ ð ]音之前的n，month[ mʌn̪θ ]。
- 清齿塞音[ *t̪* ]和浊齿塞音[ *d̪* ]，古汉语称为舌头音。印度英语中把[ *θ* ]发作送气音[ *t̪ʰ* ]，[ *ð* ]发作[d̪]或漏气音[d̪ʱ]。
- 清齿有咝擦音[ *s̪* ]，某些汉语中的s也发这个音，如三[ s̪a̋n ] ??
- 浊齿有咝擦音[ *z̪* ]
- 清齿无咝擦音[ *θ* ]，符号是希腊字母θ[ θeɪtə ]，英语中的th，美式英语中更多的是发齿间音[ *θ̟* ]，常混用。
- 浊齿无咝擦音[ *ð* ]，同上，除英语外很少有这类发音。
- 浊齿近音[ *ð̞* ]
- 齿边近音[ *l̪* ]，某些英语方言中在th前的l发这个音，如health[ hel̪θ ]。
- 浊齿闪音[ *ɾ̪* ]
- 浊齿颤音[ *r̪* ]
- 清齿挤喉塞音[ *t̪ʼ* ]，清齿无咝挤喉擦音[ *θʼ* ]
- 浊齿内爆音[ *ɗ̪* ]
- 齿搭嘴音[ *ǀ* ]，旧时用[ ʇ ]表示，不同于英文符号的l，l是浊齿龈边近音[ *l* ]。

##### 齿龈(alveolar)<a id="alveolar"></a>

![齿龈音](/assets/img/ariticulation/alveolar.png)

舌尖上顶齿龈，也称舌尖中音，古汉语的尖音。如需严格标明齿龈音的情况可以加符号[ *o̳* ]表示。

- 浊齿龈鼻音[ *n* ]，如汉语拼音的n，英语的n以及日语的な行。
- 清齿龈塞音[ *t* ]，非常普遍，如汉语拼音的d和英语的t，日语的た。有多个变体，唇音[ *tʷ* ]，送气音，即汉语拼音的t和英语重音的t[ *tʰ* ]，颚音[ *tʲ* ]，唯闭音[ *t̚* ]，喉壁音[ *tˁ* ]，喷音[ *tʼ* ]。
- 浊齿龈塞音[ *d* ]，如英语中的d，日语的だ。有多个变体，唇音[ *dʷ* ]，清化音[ *d̥* ]，漏气音[ *dʱ* ]或[ *d̤* ]，颚音[ *dʲ* ]，唯闭音[ *d̚* ]，舌尖音[ *d̺* ]，舌面音[ *d̻* ]，齿音[ *d̪* ]，齿间音[ *d̟* ]或[ *d̪͆ʼ* ]，龈后音[ *d̠* ]，紧喉音[ *d̬* ]。
- 清齿龈塞擦音[ *t͡s* ]，有时也用简写符号[ *ʦ* ]，如汉语拼音的z，c[ *t͡sʰ* ]，日语的つ。旧时也用已废弃符号[ ƾ ]表示。
- 浊齿龈塞擦音[ *d͡z* ]，有时也用简写符号[ *ʣ* ]，旧时也用已废弃符号2中间加横[ ƻ ]表示。
- 清齿龈边塞擦音[ *t͡ɬ* ]和浊齿龈边塞擦音[ *d͡ɮ* ]，在美式英语中也用[ ƛ ]和[ λ ]表示。
- 清齿龈有咝擦音[ *s* ]，如汉语拼音的s，英语的c或s，日语除し外的さ行。
- 浊齿龈有咝擦音[ *z* ]，如英语中的z或s，日语除じ外的ざ行。
- 清齿龈无咝擦音[ *θ̱* ]，浊齿龈无咝擦音[ *ð̠* ]
- 清齿龈边擦音[ *ɬ* ]，某些汉语方言中会有这个音，在美式英语中也用[ ł ]表示。
- 浊齿龈边擦音[ *ɮ* ]
- 浊齿龈近音[ *ɹ* ]，r倒转180度，如英语的r或wr，但也有将之发为浊卷舌近音[ *ɻ* ]。但通常无论是英式英语的DJ音标，还是美式英语的KK音标中，我们看到的是直接用r代替，如red[ red ]。
- 浊齿龈边近音[ *l* ]，如汉语拼音的l，英语开头的l，英语中末尾的l会变化为软腭化音[ *lˠ* ]，也写作[ *ɫ* ]，如feel[ fiːɫ ]。日语的ら行并不是发这个音，而是齿龈边闪音[ *ɺ* ]。其它变体有齿音[ *l̪* ]，龈后音[ *l̠* ]。
- 浊齿龈闪音[ *ɾ* ]，符号并不是英文的r。如美式英语中间的t，better[bɛɾɚ]，以及日语中间的ら行，如そら。变化有齿龈鼻音化闪音[ *ɾ̃* ]或[ *n̆* ]，如美式英语中的twenty[ ˈtʍɛɾ̃i ]。
- 浊齿龈边闪音[ *ɺ* ]，如日语的ら行。
- 清齿龈颤音[ *r̥* ]
- 浊齿龈颤音[ *r* ]，英语的r并不是发这个音，而是浊齿龈近音[ *ɹ* ]。变体有清化音[ *r̥* ]，抬高音[ *r̝* ]。
- 喷音有清齿龈挤喉塞音[ *tʼ* ]，清齿龈挤喉塞擦音[ *tsʼ* ]，清齿龈挤喉边塞擦音[ *tɬʼ* ]，清齿龈挤喉擦音[ *sʼ* ]，清齿龈挤喉边擦音[ *ɬʼ* ]。
- 浊齿龈内爆音[ *ɗ* ]，符号是d右上角加个弯钩。
- 齿龈边流搭嘴音[ *ǁ* ]，旧时用[ ʖ ]表示。

##### 齿龈后(postalveolar)<a id="postalveolar"></a>

![后龈音](/assets/img/ariticulation/postalveolar.png)

舌叶接近齿龈脊，包括颚龈音，卷舌音，以及龈腭音。也可用齿龈音的后化[ *o̠* ]表示。

- 清龈后有咝擦音[ *s̠* ]，也叫舌叶平齿龈后音或舌叶卷舌音，与清卷舌有咝擦音[ *ʂ* ]很接近，后者是舌尖卷舌音，可能汉语拼音的sh也发这个音。
- 浊龈后有咝擦音[ *z̠* ]，同上。
- 浊龈后近音[ *ɹ̠* ]
- 龈后搭嘴音[ *ǃ* ]，旧时用[ ʗ ]表示，拉伸的C。

##### 颚龈(palato-alveolar)<a id="palato-alveolar"></a>

也称舌叶音。

- 清颚龈塞擦音[ *t͡ʃ* ]，有时也用简写符号[ *ʧ* ]，如英语的ch。在美式英语中也用[ ž ]表示。
- 浊颚龈塞擦音[ *d͡ʒ* ]，有时也用简写符号[ *ʤ* ]，如英语的dj，出现在e、i、y前的g，如果出现在a、o、u前的g，则是发浊软腭塞音[ *ɡ* ]。在美式英语中也用[ ǰ ]、[ ǧ ]或[ ǯ ]表示。
- 清颚龈有咝擦音[ *ʃ* ]，如英语的sh，部分汉语方言的s。在美式英语中也用[ š ]表示。
- 浊颚龈有咝擦音[ *ʒ* ]，如部分英语的s。在美式英语中也用[ č ]表示。
- 清颚龈挤喉塞擦音[ *tʃʼ* ]，清颚龈挤喉擦音[ *ʃʼ* ]

##### 卷舌(retroflex)<a id="retroflex"></a>

![卷舌音](/assets/img/ariticulation/retroflex.png)

舌尖后卷抵住上颚，在齿龈音的基础上右下角加勾[ *o̢* ]或R化音[ *o˞* ]表示，也称舌尖后音，包括

- 浊卷舌鼻音[ *ɳ* ]
- 清卷舌塞音[ *ʈ* ]，浊卷舌塞音[ *ɖ* ]，印度英语的t，d经常发这个音。
- 清卷舌塞擦音[ *ʈ͡ʂ* ]，如汉语拼音的zh，ch[ *ʈ͡ʂʰ* ]。
- 浊卷舌塞擦音[ *ɖ͡ʐ* ]
- 清卷舌有咝擦音[ *ʂ* ]，也叫舌尖下齿龈后音或舌尖下卷舌音，如汉语拼音的sh。
- 浊卷舌有咝擦音[ *ʐ* ]，同上，如汉语拼音的r，个人感觉，另一个浊卷舌边近音[ *ɭ* ]更接近。
- 清卷舌边擦音[ *ɭ̊˔* ]，通常用[ *ꞎ* ]表示，该符号未被IPA收入。
- 浊卷舌近音[ *ɻ* ]，与卷舌元音[ *ɚ* ]对应，和[ *ʐ* ]一样，也作为汉语拼音r的注音，如儿[ ɑɻ ]，有时美式英语中r也发这个音，如red[ ɻʷɛd ]。
- 浊卷舌边近音[ *ɭ* ]，不同于英文符号的l，和[ *ʐ* ]一样，也作为汉语拼音r的注音。
- 浊卷舌闪音[ *ɽ* ]
- 浊卷舌边闪音[ *ɺ̢* ]，未被IPA收入，也写作[ *ɭ̆* ]或[ *ɺ˞* ]。
- 浊卷舌颤音[ *ɽ͡r* ]
- 清卷舌挤喉擦音[ *ʂʼ* ]
- 卷舌搭嘴音[ *ǃ˞* ]，也常写作[ *!!* ]。

#### 舌背(dorsal)<a id="dorsal"></a>

由舌头中间部分接触口腔其他部位发出声音

##### 龈硬腭(alveolopalatal)<a id="alveolopalatal"></a>

![龈腭音](/assets/img/ariticulation/alveolopalatal.png)

舌面接近前硬腭，也称舌面前音，包括

- 浊龈颚鼻音[ *ȵ* ]或[ *n̂* ]，非IPA标准，IPA应表示为后龈音的颚化[ *n̠ʲ* ]，或者硬腭音的前化[ *ɲ̟* ]，老国音中的gn就是这个音，注音符号是“ㄬ”，现在只用在方言中，如吴语的女，日语的に。
- 清龈颚塞音[ *ȶ* ]或[ *t̂* ]，浊龈颚塞音[ *ȡ* ]或[ *d̂* ]，符号均未被IPA收入，IPA用后龈音的颚化[ *t̠ʲ* ]，[ *d̠ʲ* ]，或硬腭音的前化[ *c̟* ]或[ *ɟ̟* ]表示。
- 清龈颚塞擦音[ *t͡ɕ* ]，如汉语拼音的j，q[ *t͡ɕʰ* ]，日语的ち。
- 浊龈颚塞擦音[ *d͡ʑ* ]，如日语的じ。
- 清龈颚有咝擦音[ *ɕ* ]，如汉语拼音的x，日语的し，也有写作龈音的颚化[ *ʃʲ* ]。
- 浊龈颚有咝擦音[ *ʑ* ]，如日语母音后的じ，かじ[ kaʑi ]，以及上海话的徐。
- 龈颚近音[ *ȴ* ]或[ *l̂* ]，也未收入IPA，标准应用后龈音的颚化音[ *l̠ʲ* ]或硬腭音的前化[ *ʎ̟* ]表示。
- 清龈颚挤喉擦音[ *ɕʼ* ]

##### 硬腭(palatal)<a id="palatal"></a>

![硬腭音](/assets/img/ariticulation/palatal.png)

舌面接近或抵住口腔上中部，也称舌面中音，包括

- 浊硬腭鼻音[ *ɲ* ]。
- 清硬腭塞音[ *c* ]，浊硬腭塞音[ *ɟ* ]
- 清硬腭擦音[ *ç* ]，如日语中/ i /前的ひ，ひと[ çi̥to̞ ]，类似介于汉语拼音h和x之间的音。
- 浊硬腭擦音[ *ʝ* ]
- 清硬腭边擦音[ *ʎ̥˔* ]，也用[ ** ]表示，该符号未被IPA收入。
- 浊硬腭近音[ *j* ]，如英语开头的y，汉语拼音的y，实际上是闭前不圆唇元音[ *i* ]的无声母表示，弱化读法也发[ *j* ]。
- 浊硬腭边近音[ *ʎ* ]
- 清硬腭挤喉塞音[ *cʼ* ]
- 浊硬腭内爆音[ *ʄ* ]
- 硬腭搭嘴音[ *ǂ* ]，旧版写作[ ʄ ]。

##### 唇硬腭(labial-palatal)<a id="labial-palatal"></a>

用硬腭音的唇硬腭化[ *oᶣ* ]表示。

- 唇硬腭浊近音[ *ɥ* ]，对应于闭前圆唇元音[ *y* ]，也用硬腭音的圆唇化[ *jʷ* ]表示，如汉语拼音的y。

##### 软腭(velar)<a id="velar"></a>

![软腭音](/assets/img/ariticulation/velar.png)

即古汉语的牙音，舌面接近口腔后部，也称舌面后音，也有软腭化辅音用[ *oˠ* ]表示，包括

- 浊软腭鼻音[ *ŋ* ]，如汉语拼音中的后鼻音，英语的ng，部分汉语方言中也出现在字首。有多种变体，清化音[ *ŋ̊* ]，自成音节[ *ŋ̍* ]，气声音[ *ŋ̈* ]，鼻音[ *ŋ̃* ]，唇音[ *ŋʷ* ]。
- 清软腭塞音[ *k* ]，即汉语拼音中的g，英语中的c或k。有多个变体，唇音[ *kʷ* ]，送气音，即汉语拼音的k和英语重音的c，k，日语的か行[ *kʰ* ]，送气唇音[ *kʷʰ* ]，颚音[ *kʲ* ]，唯闭音[ *k̚* ]，浊化音[ *k̬* ]，喷音[ *kʼ* ]。
- 浊软腭塞音[ *ɡ* ]，不同于英文符号的g。英语出现在a、o、u前的g发这个音，以及日语中的が行。有多个变体，清化音[ *ɡ̊* ]，唇音[ *ɡʷ* ]，漏气音[ *ɡʱ* ]或[ *ɡ̈* ]，颚音[ *ɡʲ* ]，唯闭音[ *ɡ̚* ]，清化音[ *ɡ̊* ]。
- 清小舌塞擦音[ *k͡x* ]
- 清软腭擦音[ *x* ]，如汉语拼音中的h。有多个变体，唇音[ *xʷ* ]，颚音[ *xʲ* ]，喷音[ *xʼ* ]。
- 浊软腭擦音[ *ɣ* ]
- 清硬腭边擦音[ *ʟ̝̊* ]，也用[ ** ]表示，该符号未被IPA收入。
- 浊软腭近音[ *ɰ* ]，对应于闭后不圆唇元音[ *ɯ* ]，但更常见的是用浊软腭擦音的低化音[ *ɣ̞* ]表示。
- 浊软腭边近音[ *ʟ* ]，不同于英文符号的L。
- 清软腭挤喉塞音[ *kʼ* ]，清软腭挤喉塞擦音[ *kxʼ* ]，清软腭挤喉擦音[ *xʼ* ]
- 浊软腭内爆音[ *ɠ* ]
- 清硬软腭擦音[ *ɧ* ]，实际上这是一个有争议的音，也有认为是颚龈擦音[ *ʃ* ]和软腭擦音[ *x* ]的合音，也有认为是后龈擦音或软腭擦音。

##### 唇软腭(labial–velar)<a id="labial–velar"></a>

- 唇软腭浊鼻音[ *ŋ͡m* ]
- 唇软腭清塞音[ *k͡p* ]，唇软腭浊塞音[ *ɡ͡b* ]
- 清唇软腭近音[ *ʍ* ]，倒转的英文符号w，也可用浊唇软腭近音的清化音[ *w̥* ]表示。由于历史原因，[ *ʍ* ]通常被归为擦音。如部分美式英语的wh，when[ ʍen ]。
- 浊唇软腭近音[ *w* ]，也被表示为浊软腭近音的唇音化[ *ɰʷ* ]或闭后圆唇元音的半元音[ *u̯* ]，如汉语拼音中的w，以及英语中的w。日语的行则是压缩浊唇软腭近音[ *wᵝ* ]，即嘴唇缩小。

##### 小舌(uvular)<a id="uvular"></a>

![小舌音](/assets/img/ariticulation/uvular.png)

气流冲击小舌发出的声音，包括

- 浊小舌鼻音[ *ɴ* ]，不同于英文符号的N，如日语的ん。
- 清小舌塞音[ *q* ]，同其他的塞音一样，有多个变体，唇音[ *qʷ* ]，送气音[ *qʰ* ]，送气唇音[ *qʷʰ* ]，半唇音[ *q̜ʷ* ]，强唇音[ *q̹ʷ* ]，颚音[ *qʲ* ]，送气颚音[ *qʲʰ* ]。
- 浊小舌塞音[ *ɢ* ]，不同于英文符号的G。
- 清小舌塞擦音[ *q͡χ* ]
- 清小舌擦音[ *χ* ]，在美式英语中也用[ ẋ ]表示。
- [ *ʁ* ]同时表示浊小舌擦音和浊小舌近音，进一步可用抬高音[ *ʁ̝* ]和降低音[ *ʁ̞* ]加以区别。
- 浊小舌颤音[ *ʀ* ]，源于法语。
- 清小舌挤喉塞音[ *qʼ* ]，清小舌挤喉塞擦音[ *qχʼ* ]，清小舌挤喉擦音[ *χʼ* ]
- 浊小舌内爆音[ *ʛ* ]

#### 喉(larynɡeal)<a id="larynɡeal"></a>

有时也称舌根音(radical)

##### 咽喉(pharyngeal)<a id="pharyngeal"></a>

- 清咽擦音[ *ħ* ]，浊咽擦音[ *ʕ* ]
- 浊咽近音[ *ʕ̞* ]，也可用开后不圆唇元音的半元音[ *ɑ̯* ]表示。

##### 会厌(epiglottal)<a id="epiglottal"></a>

![会厌音](/assets/img/ariticulation/epiglottal.png)

- 会厌塞音[ *ʡ* ]，没有明确的清浊，通常为清。
- 清会厌擦音[ *ʜ* ]，也被归为颤音，不同于英文符号的H。
- 浊会厌擦音[ *ʢ* ]，也被归为近音或颤音。
- 浊会厌闪音[ *ʡ̯* ]
- 会厌颤音[ *ᴙ* ]，左右倒转的R，未被IPA收入。
- 清会厌喷音[ *ʡʼ* ]

##### 声门(glottal)<a id="glottal"></a>

![声门音](/assets/img/ariticulation/glottal.png)

即古汉语的喉音，包括

- 清声门塞音[ *ʔ* ]，问号?没有下面的点，如日语促音，吴语的入声，旧时也用问号[ ? ]表示。
- 清喉过渡音[ *h* ]，不同于英文符号的h，也称清喉擦音，实际上介于擦音和近音之间。英语中开头的h基本发这个音，还有粤语的h，但汉语拼音的h是清软颚擦音[ *x* ]。
- 浊喉过渡音[ *ɦ* ]，也称浊喉擦音。

### 辅音列表(consonant chart)<a id="consonant-chart"></a>

|           部位          | 鼻音 |    塞音    |     塞擦音   |  边塞擦音  | 有咝擦音 | 无咝擦音 | 边擦音 |  近音 |边近音| 闪音 |边闪音|  颤音 |喷音|内爆音|搭嘴音
|-------------------------|-----|-----------|-------------|-----------|---------|---------|-------|-------|-----|-----|-----|-------|------|------|---
|[双唇](#bilabial)         | *m* |  *p* *b*  |             |           |         | *ɸ* *β* |       |   *β̞*|     |     |     |    *ʙ*| *pʼ* |  *ɓ*  | *ʘ*
|[唇齿](#labiodental)      | *ɱ* | *p̪* *b̪* |*p̪͡f* *b̪͡v*|           |         | *f* *v* |       |    *ʋ*|     | *ⱱ* |     |       | *fʼ* |      | *ʘ̪*
|[舌唇](#linguolabial)     | *n̼*| *t̼* *d̼* |             |           |         |*θ̼* *ð̼*|       |       |     |     |     |   *r̼*|      |      |*ǀ̼*
|[齿间](#interdental)      |     |           |             |           |         |*θ̟* *ð̟*|       |       |     |     |     |
|[齿](#interdental)        | *n̪*| *t̪* *d̪* |*t̪͡s̪* *d̪͡z̪*|         |*s̪* *z̪*| *θ* *ð* |       |   *ð̞*| *l̪*| *ɾ̪*|     |   *r̪*| *t̪ʼ* *θʼ* |    *ɗ̪*| *ǀ* 
|[齿龈](#alveolar)         | *n* |  *t* *d*  | *t͡s* *d͡z* |*t͡ɬ* *d͡ɮ*| *s* *z* |*θ̱* *ð̱*|*ɬ* *ɮ*|    *ɹ*| *l* | *ɾ* | *ɺ* |*r̥* *r*|*tʼ* *tsʼ* *tɬʼ* *sʼ* *ɬ’*| *ɗ*  | *ǁ* 
|[龈后](#postalveolar)     |     |           |             |           |*s̠* *z̠*|         |       |    *ɹ̠*|     |     |     |       |      |      | *ǃ*
| [后龈](#palato-alveolar) |     |           | *t͡ʃ* *d͡ʒ* |           | *ʃ* *ʒ* |         |       |       |     |     |     |       |*tʃʼ* *ʃʼ*|      |
| [卷舌](#retroflex)       | *ɳ* |  *ʈ* *ɖ*  | *ʈ͡ʂ* *ɖ͡ʐ* |           | *ʂ* *ʐ* |         | *ɭ̊˔* |    *ɻ*| *ɭ* | *ɽ* |  ɺ̢ |  *ɽ͡r*| *ʂʼ* |     | *ǃ˞*
| [龈硬腭](#alveolopalatal)|*n̠ʲ*|*t̠ʲ* *d̠ʲ*| *t͡ɕ* *d͡ʑ* |           | *ɕ* *ʑ* |         |       |       |*l̠ʲ*|     |     |       | *ɕʼ* |
|[硬腭](#palatal)          | *ɲ* |  *c* *ɟ*  |             |           |         | *ç* *ʝ* | *ʎ̥˔* |    *j*| *ʎ* |     |     |       | *cʼ* |  *ʄ* | *ǂ*
| [唇硬腭](#labial-palatal)|     |           |             |           |         |         |       |    *ɥ*|
|[软腭](#velar)            | *ŋ* |  *k* *ɡ*  | *k͡x*       |           |        |*x* *ɣ* *ɧ*|      |    *ɰ*| *ʟ* |     |     |       |*kʼ* *kxʼ* *xʼ*|    *ɠ* | 
| [唇软腭](#labial-velar)  |*ŋ͡m*|*k͡p* *ɡ͡b*|             |           |         |         |       |*ʍ* *w*|
|[小舌](#uvular)           | *ɴ* |  *q* *ɢ*  | *q͡χ*       |           |         | *χ* *ʁ* |       |   *ʁ̞*|     |     |     |    *ʀ*|*qʼ* *qχʼ* *χʼ*|    *ʛ* |
|[咽喉](#pharyngeal)       |     |           |             |           |         | *ħ* *ʕ* |       |   *ʕ̞*|     |     |     |       |       |      |
|[会厌](#epiglottal)       |     | *ʡ*       |             |           |         | *ʜ* *ʢ* |       |   *ʢ̞*|     | *ʡ̯*|     |*ʜ* *ʢ* ᴙ|       |      |
|[声门](#glottal)          |     | *ʔ*       |             |           |         | *h* *ɦ* |       |*h* *ɦ*|     |     |     |       |       |      |


## 变音符号(diacritic)<a id="diacritic"></a>

也叫附加符号，加在音标周围的小记号，表示发音变化。一般使用下标，如果遇到降部，即下方超出基线的字母，如'g'、'y'等则使用上标，如[ *d̥* ]和[ *ɡ̊* ]。

### 音节(syllabicity)<a id="syllabicity"></a>

- 成音节(syllabic) [ *o̩* ]
- 半音节(non-syllabic) [ *o̯* ]，见[半元音](#semivowel)。

### 除阻(consonant-release)<a id="consonant-release"></a>

- 送气(aspirated) [ *oʰ* ]或[ *oʱ* ]，清音用符号h，而浊音用符号ɦ，如[ *tʰ* ]，[ *dʱ* ]。
- 无声除阻(no-audible-release) [ *o̚* ]，如[ *d̚* ]。古汉语的入声即以[ *p̚* ]、[ *t̚* ]、[ *k̚* ]结尾，英语中也有，当塞音后面跟其他辅音时，往往也变为无声除阻，如doctor[ ˈdɒk̚tɚ ]。
- 鼻音除阻(nasal-release) [ *oⁿ* ]，除阻时由塞音转为鼻音，如[ *dⁿ* ]。
- 边音除阻(lateral-release) [ *oˡ* ]，除阻时由塞音转为边音，如[ *dˡ* ]。

### 发音(phonation)<a id="phonation"></a>

- 清化(voiceless) [ *o̥* ]，发声时声带不振动，如[ *n̥* ]、[ *d̥* ]。
- 浊化(voiced) [ *o̬* ]，发声时声带振动，如[ *t̬* ]、[ *s̬* ]。
- 漏气音(breathy voiced) [ *o̤* ]，即浊送气[ *oʱ* ]，如[ *b̤* ]、[ *a̤* ]。
- 吱嘎音(creaky voiced) [ *o̰* ]，声带持续振动，气流较弱，元音听感更明显，如[ *b̰* ]、[ *a̰* ]。

### 发音部位(articulation)<a id="articulation"></a>

- 齿化(dental) [ *o̪* ]，详见[齿音](#dental)，如[ *t̪* ]、[ *d̪* ]。
- 舌唇化(linguolabial) [ *o̼* ]，也可表示为相应双唇音的舌尖化，如[ *t̼* ]和[ *p̺* ]、[ *d̼* ]和[ *b̺* ]。
- 舌尖化(apical) [ *o̺* ]，舌尖抵住或接近齿、龈、颚等部位。包括舌尖前音，即[齿音](#dental)，舌尖中音，即[齿龈音](#alveolar)，以及舌尖后音，即[卷舌音](#retroflex)，如[ *t̺* ]、[ *d̺* ]。
- 舌叶化(laminal) [ *o̻* ]，舌叶接近其余发声部位，如[ *t̻* ]、[ *d̻* ]。
- 较前(advanced) [ *o̟* ]，发音较标准靠前，可参照[元音图](#monophthong)进行比较，如[ *u̟* ]、[ *t̟* ]。
- 较后(retracted) [ *o̠* ]，发音较标准靠后，如[ *i̠* ]、[ *t̠* ]。
- 较央(centralized) [ *ö* ]，如次闭央不圆唇元音[ *ɪ̈* ]即用次闭次前不圆唇元音[ *ɪ* ]加上较央符号表示、次闭央圆唇元音[ *ʊ̈* ]同。
- 中央化(mid-centralized) [ *o̽* ]，除了前后相比靠近中央，上下相比靠近中间，如[ *e̽* ]、[ *ɯ̽* ]。
- 抬高(raised) [ *o̝* ]，舌面位置抬高，如[ *e̝* ]、[ *β̝* ]。
- 降低(lowered) [ *o˕* ]，如中前不圆唇元音[ *e̞* ]即以半闭前不圆唇元音[ *e* ]为基础，舌面位置降低。

### 协同发音(co-articulation)<a id="co-articulation"></a>

- 更圆唇(more rounded) [ *o̹* ]
- 更展唇(less rounded) [ *o̜* ]
- 唇化(labialized) [ *oʷ* ]，如[ *tʷ* ]、[ *dʷ* ]。
- 颚化(palatalized) [ *oʲ* ]，辅音后跟[ *i* ]、[ *e* ]等音时，自身发音会变得接近硬腭音，称为颚化，古汉语的团音即是颚化，如[ *tʲ* ]、[ *dʲ* ]。
- 软腭化(velarized) [ *oˠ* ]或[ *o̴* ]，如[ *tˠ* ]、[ *dˠ* ]。
- 喉壁化(pharyngealized) [ *oˤ* ]或[ *o̴* ]，如[ *tˤ* ]、[ *dˤ* ]。
- 唇-硬颚化(labio-palatalized) [ *oᶣ* ]，如[ *tᶣ* ]、[ *dᶣ* ]。
- 舌根前移(advanced tongue root) [ *o̘* ]，如[ *e̘* ]。
- 舌根后移(retracted tongue root) [ *o̙* ]，如[ *e̙* ]。
- 鼻音化(nasalized) [ *õ* ]，如[ *ẽ* ]。
- R音化(rhotacized) [ *o˞* ]，汉语称为儿化音，如[ *ɚ* ]、[ *ɝ* ]。


## 超音段(suprasegmentals)<a id="suprasegmentals"></a>

用来描述单独辅音或元音之外的发音特征，诸如韵律、声调、音长，以及重音等。

### 重音(stress)<a id="stress"></a>

某个语音发音时音强更为显著，分为主重音(primary stress) [ *ˈo* ]，和次重音(secondary stress) [ *ˌo* ]。重音有时候有区分意义的作用，比如，汉语的东西[ toːŋsɯːl ]指的是方向，东西[ ˈtoːŋsɯːl ]指的是物品，英语的record[ˈrecɔːd]和record[rɪˈkɔːd]也是如此，一个名词，一个动词。

### 音长(length)<a id="length"></a>

发音时间的变化，如长音(long) [ *oː* ]，半长(half-long) [ *oˑ* ]，超短(extra-short) [ *ŏ* ]。在诸如英语和日语中，音长是区分意义的，汉语则不然。

### 联诵(linking)<a id="linking"></a>

据说是从法语liaison翻译的，可谓信达雅，前一单词最后的辅音要和后一单词开头的元音连读，英语中也有，如not at all[ nɒt‿ət‿ɔːlˠ ]。

### 声调(tone)<a id="tone"></a>

音节在发音过程中的高低变化称为声调，即音高变化。在某些语言中，声调是区分意义的，如汉语，另外的语言中，则不区分意义，如英语。

声调由高到低，依次是，

- 高调(extra-high) [ *e̋* ]，也可用符号 '˥' 或数字 5 表示。
- 次高调(high) [ *é* ]，也可用符号 '˦' 或数字 4 表示。
- 中调(mid) [ *ē* ]，也可用符号 '˧' 或数字 3 表示。
- 次低调(low) [ *è* ]，也可用符号 '˨' 或数字 2 表示。
- 低调(extra-low) [ *ȅ* ]，也可用符号 '˩' 或数字 1 表示。

变化有

- 升调(rising) [ *ě* ]，也可用符号 '˩˥' 或调值 15 表示。
- 高升调(high-rising) [ *e᷄* ]，也可用符号 '˧˥' 或调值 35 表示。
- 低升调(low-rising) [ *e᷅* ]，也可用符号 '˩˧' 或调值 13 表示。
- 降调(falling) [ *ê* ]，也可用符号 '˥˩' 或调值 51 表示。
- 高降调(high-falling) [ *e᷇* ]，也可用符号 '˥˧' 或调值 53 表示。
- 低降调(low-falling) [ *e᷆* ]，也可用符号 '˧˩' 或调值 31 表示。
- 升降调(rising-falling) [ *e᷈* ]，也可用符号 '˧˦˨' 或调值 342 表示。
- 降升调(falling-rising) [ *e᷉* ]，也可用符号 '˦˨˧' 或调值 423 表示。


---
[chart with audio](http://ytenx.org/byohlyuk/IPA_Charts)

<script>
	var audios = {
		// close vowels
		'i': 'close_front_unrounded.mp3',
		'y': 'close_front_rounded.mp3',
		'ɨ': 'close_central_unrounded.mp3',
		'ʉ': 'close_central_rounded.mp3',
		'ɯ': 'close_back_unrounded.mp3',
		'u': 'close_back_rounded.mp3',
		// near-close
		'ɪ': 'near-close_near-front_unrounded.mp3',
		'ʏ': 'near-close_near-front_rounded.mp3',
		'ɪ̈': 'near-close_central_unrounded.ogg',
		'ʊ̈': '',
		'ʊ': 'near-close_near-back_rounded.mp3',
		// close-mid
		'e': 'close-mid_front_unrounded.mp3',
		'ø': 'close-mid_front_rounded.mp3',
		'ɘ': 'close-mid_central_unrounded.mp3',
		'ɵ': 'close-mid_central_rounded.mp3',
		'ɤ': 'close-mid_back_unrounded.mp3',
		'o': 'close-mid_back_rounded.mp3',
		// mid
		'e̞': 'mid_front_unrounded.ogg',
		'ø̞': '',
		'ə': 'mid-central.mp3',
		'ɵ̞': '',
		'ɤ̞': '',
		'o̞': 'mid_back_rounded.ogg',
		// open-mid
		'ɛ': 'open-mid_front_unrounded.mp3',
		'œ': 'open-mid_front_rounded.mp3',
		'ɜ': 'open-mid_central_unrounded.mp3',
		'ɞ': 'open-mid_central_rounded.mp3',
		'ʌ': 'open-mid_back_unrounded.mp3',
		'ɔ': 'open-mid_back_rounded.mp3',
		// near-open
		'æ': 'near-open_front_unrounded.mp3',
		'ɐ': 'near-open_central.mp3',
		// open
		'a': 'open_front_unrounded.mp3',
		'ɶ': 'open_front_rounded.mp3',
		'ä': 'open_central_unrounded.ogg',
		'ɒ̈': '',
		'ɑ': 'open_back_unrounded.mp3',
		'ɒ': 'open_back_rounded.mp3',

		// bilabial
		'm': 'voiced_bilabial_nasal.mp3',
		'p': 'voiceless_bilabial_plosive.mp3',
		'b': 'voiced_bilabial_plosive.mp3',
		'ɸ': 'voiceless_bilabial_fricative.mp3',
		'β': 'voiced_bilabial_fricative.mp3',
		'β̞': 'lowered_voiced_bilabial_approximant.mp3',
		'ʙ': 'voiced_bilabial_trill.mp3',
		'pʼ': 'voiceless_bilabial_ejective_plosive.mp3',
		'ɓ': 'voiced_bilabial_implosive.mp3',
		'ʘ': 'bilabial_click.mp3',
		// labiodental
		'ɱ': 'voiced_labiodental_nasal.mp3',
		'p̪': 'voiceless_labiodental_plosive.ogg',
		'b̪': 'voiced_labiodental_plosive.ogg',
		'p̪͡f': 'voiceless_labiodental_affricate.ogg',
		'b̪͡v': 'voiced_labiodental_affricate.ogg',
		'f': 'voiceless_labiodental_fricative.mp3',
		'v': 'voiced_labiodental_fricative.mp3',
		'ʋ': 'voiced_labiodental_approximant.mp3',
		'ⱱ': 'voiced_labiodental_flap.mp3',
		'fʼ': 'voiceless_labiodental_ejective_fricative.ogg',
		// labial-velar
		'k͡p': 'voiceless_labial-velar_plosive.ogg',
		'ɡ͡b': 'voiced_labial-velar_plosive.ogg',
		'ŋ͡m': 'labial-velar_nasal_plosive.ogg',
		// dental
		't̪': 'voiceless_dental_plosive.mp3',
		'd̪': 'voiced_dental_plosive.mp3',
		't̪͡s̪': 'voiceless_dental_sibilant_affricate.ogg',
		'd̪͡z̪': 'voiced_dental_sibilant_affricate.ogg',
		'θ': 'voiceless_dental_fricative.mp3',
		'ð': 'voiced_dental_fricative.mp3',
		'θʼ': 'dental_ejective_fricative.ogg',
		'ǀ': 'dental_click.mp3',
		// alveolar
		'n': 'voiced_alveolar_nasal.mp3',
		't': 'voiceless_alveolar_plosive.mp3',
		'd': 'voiced_alveolar_plosive.mp3',
		't͡s': 'voiceless_alveolar_sibilant_affricate.mp3',
		'd͡z': 'voiced_alveolar_sibilant_affricate.ogg',
		't͡ɬ': 'voiceless_alveolar_lateral_affricate.ogg',
		'd͡ɮ': 'voiced_alveolar_lateral_affricate.mp3',
		's': 'voiceless_alveolar_sibilant_fricative.mp3',
		'z': 'voiced_alveolar_sibilant_fricative.mp3',
		'θ̠': 'voiceless_alveolar_non-sibilant_fricative.ogg',
		'ɬ': 'voiceless_alveolar_lateral_fricative.mp3',
		'ɮ': 'voiced_alveolar_lateral_fricative.mp3',
		'ɹ': 'voiced_alveolar_approximant.mp3',
		'l': 'voiced_alveolar_lateral_approximant.mp3',
		'lˠ': 'velarized_voiced_alveolar_lateral_approximant.mp3',
		'ɫ': 'velarized_voiced_alveolar_lateral_approximant.mp3',
		'ɾ': 'voiced_alveolar_flap.mp3',
		'ɺ': 'voiced_alveolar_lateral_flap.mp3',
		'r̥': 'voiceless_alveolar_trill.ogg',
		'r̝': 'voiced_alveolar_raised_trill.ogg',
		'r': 'voiced_alveolar_trill.mp3',
		'tʼ': 'voiceless_alveolar_ejective_plosive.mp3',
		'sʼ': 'voiceless_alveolar_ejective_fricative.mp3',
		'ɬʼ': 'voiceless_alveolar_lateral_ejective_fricative.ogg',
		'tsʼ': 'alveolar_ejective_affricate.ogg',
		'tɬʼ': 'voiceless_alveolar_lateral_ejective_affricate.ogg',
		'ɗ': 'voiced_alveolar_implosive.mp3',
		'ǁ': 'alveolar_lateral_click.mp3',
		// postalveolar
		's̠': 'voiceless_alveolar_retracted_sibilant.ogg',
		'ɹ̠': 'voiced_postalveolar_approximant.ogg',
		'ǃ': 'postalveolar_click.mp3',
		// palato-alveolar
		't͡ʃ': 'voiceless_palato-alveolar_affricate.ogg',
		'd͡ʒ': 'voiced_palato-alveolar_affricate.ogg',
		'ʃ': 'voiceless_palato-alveolar_sibilant_fricative.mp3',
		'ʒ': 'voiced_palato-alveolar_sibilant_fricative.mp3',
		'ʃʼ': 'voiceless_palato-alveolar_ejective_fricative.ogg',
		'tʃʼ': 'voiceless_palato-alveolar_ejective_affricate.ogg',
		// retroflex
		'ɳ': 'voiced_retroflex_nasal.mp3',
		'ʈ': 'voiceless_retroflex_plosive.mp3',
		'ɖ': 'voiced_retroflex_plosive.mp3',
		'ʈ͡ʂ': 'voiceless_retroflex_affricate.ogg',
		'ɖ͡ʐ': 'voiced_retroflex_affricate.ogg',
		'ʂ': 'voiceless_retroflex_sibilant_fricative.mp3',
		'ʐ': 'voiced_retroflex_sibilant_fricative.mp3',
		'ɭ̊˔': 'voiceless_retroflex_lateral_fricative.ogg',
		'ꞎ': 'voiceless_retroflex_lateral_fricative.ogg',
		'ɻ': 'voiced_retroflex_approximant.mp3',
		'ɭ': 'voiced_retroflex_lateral_approximant.mp3',
		'ɽ': 'voiced_retroflex_flap.mp3',
		'ʂʼ': 'voiceless_retroflex_ejective_fricative.ogg',
		// alveolo-palatal
		't͡ɕ': 'voiceless_alveolo-palatal_affricate.ogg',
		'd͡ʑ': 'voiced_alveolo-palatal_affricate.ogg',
		'ɕ': 'voiceless_alveolo-palatal_sibilant_fricative.mp3',
		'ʑ': 'voiced_alveolo-palatal_sibilant_fricative.mp3',
		'ɕʼ': 'voiceless_alveolo-palatal_ejective_fricative.ogg',
		// palatal
		'ɲ': 'voiced_palatal_nasal.mp3',
		'c': 'voiceless_palatal_plosive.mp3',
		'ɟ': 'voiced_palatal_plosive.mp3',
		'ç': 'voiceless_palatal_fricative.mp3',
		'ʝ': 'voiced_palatal_fricative.mp3',
		'ʎ̥˔': 'voiceless_palatal_lateral_fricative.ogg',
		'j': 'voiced_palatal_approximant.mp3',
		'ʎ': 'voiced_palatal_lateral_approximant.mp3',
		'cʼ': 'voiceless_palatal_ejective.ogg',
		'ʄ': 'voiced_palatal_implosive.mp3',
		'ǂ': 'palatoalveolar_click.mp3',
		'ɥ': 'voiced_labial-palatal_approximant.mp3',
		// velar
		'ŋ': 'voiced_velar_nasal.mp3',
		'k': 'voiceless_velar_plosive.mp3',
		'ɡ': 'voiced_velar_plosive.mp3',
		'k͡x': 'voiceless_velar_affricate.ogg',
		'x': 'voiceless_velar_fricative.mp3',
		'ɣ': 'voiced_velar_fricative.mp3',
		'ʎ̥˔': 'voiceless_velar_lateral_fricative.ogg',
		'ɰ': 'voiced_velar_approximant.mp3',
		'ʟ': 'voiced_velar_lateral_approximant.mp3',
		'ʍ': 'voiceless_labial–velar_fricative.mp3',
		'w': 'voiced_labial-velar_approximant.mp3',
		'kʼ': 'voiceless_velar_ejective_plosive.mp3',
		'xʼ': 'voiceless_velar_ejective_fricative.ogg',
		'kxʼ': 'voiceless_velar_ejective_affricate.ogg',
		'ɠ': 'voiced_velar_implosive.mp3',
		'ɧ': 'voiceless_dorso-palatal_velar_fricative.mp3',
		// uvular
		'ɴ': 'voiced_uvular_nasal.mp3',
		'q': 'voiceless_uvular_plosive.mp3',
		'ɢ': 'voiced_uvular_plosive.mp3',
		'χ': 'voiceless_uvular_fricative.mp3',
		'ʁ': 'voiced_uvular_fricative.mp3',
		'q͡χ': 'voiceless_uvular_affricate.ogg',
		'ʀ': 'voiced_uvular_trill.ogg',
		'qʼ': 'voiceless_uvular_ejective_plosive.ogg',
		'χʼ': 'voiceless_uvular_ejective_fricative.ogg',
		'qχʼ': 'voiceless_uvular_ejective_affricate.ogg',
		'ʛ': 'voiced_uvular_implosive.mp3',
		// pharyngeal
		'ħ': 'voiceless_pharyngeal_fricative.mp3',
		'ʕ': 'voiced_pharyngeal_fricative.mp3',
		'ʡ': 'epiglottal_plosive.mp3',
		'ʜ': 'voiceless_epiglottal_fricative.mp3',
		'ʢ': 'voiced_epiglottal_fricative.mp3',
		// glottal
		'ʔ': 'voiceless_glottal_plosive.mp3',
		'h': 'voiceless_glottal_fricative.mp3',
		'ɦ': 'voiced_glottal_fricative.mp3',

		// diacritic
		// consonant-release
		'tʰ': 'aspirated_voiceless_alveolar_plosive.mp3',
		'dʱ': 'aspirated_voiced_alveolar_plosive.mp3',
		'dⁿ': 'nasal-release_voiced_alveolar_plosive.mp3',
		'dˡ': 'lateral-release_voiced_alveolar_plosive.mp3',
		'd̚': 'no-audible-release_voiced_alveolar_plosive.mp3',
		// phonation
		'n̥': 'devoiced_voiced_alveolar_nasal.mp3',
		'd̥': 'devoiced_voiced_alveolar_plosive.mp3',
		't̬': 'voiced_voiceless_alveolar_plosive.mp3',
		's̬': 'voiced_voiceless_alveolar_fricative.mp3',
		'b̤': 'breathy-voiced_voiced_bilabial_plosive.mp3',
		'a̤': 'breathy-voiced_open_front_unrounded.mp3',
		'b̰': 'creaky-voiced_voiced_bilabial_plosive.mp3',
		'a̰': 'creaky-voiced_open_front_unrounded.mp3',
		// articulation
		't̪': 'dentalized_voiceless_alveolar_plosive.mp3',
		'd̪': 'dentalized_voiced_alveolar_plosive.mp3',
		't̺': 'apical_voiceless_alveolar_plosive.mp3',
		'd̺': 'apical_voiced_alveolar_plosive.mp3',
		't̼': 'linguolabialized_voiceless_alveolar_plosive.mp3',
		'd̼': 'linguolabialized_voiced_alveolar_plosive.mp3',
		't̻': 'laminal_voiceless_alveolar_plosive.mp3',
		'd̻': 'laminal_voiced_alveolar_plosive.mp3',
		// co-articulation
		'tʷ': 'labialized_voiceless_alveolar_plosive.mp3',
		'dʷ': 'labialized_voiced_alveolar_plosive.mp3',
		'tʲ': 'palatalized_voiceless_alveolar_plosive.mp3',
		'dʲ': 'palatalized_voiced_alveolar_plosive.mp3',
		'tˠ': 'velarized_voiceless_alveolar_plosive.mp3',
		'dˠ': 'velarized_voiced_alveolar_plosive.mp3',
		'tˤ': 'pharyngealized_voiceless_alveolar_plosive.mp3',
		'dˤ': 'pharyngealized_voiced_alveolar_plosive.mp3',
		'e̘': 'advanced-tongue-root_close-mid_front_unrounded.mp3',
		'e̙': 'retracted-tongue-root_close-mid_front_unrounded.mp3',
		'ẽ': 'nasalized_close-mid_front_unrounded.mp3',
		'ɚ': 'rhotic_mid_central.mp3',
		'ɝ': 'rhotic_open_front_unrounded.mp3',

		// suprasegmentals
		'e̋': 'extra-high-tone_close-mid_front_unrounded.mp3',
		'é': 'high-tone_close-mid_front_unrounded.mp3',
		'ē': 'mid-tone_close-mid_front_unrounded.mp3',
		'è': 'low-tone_close-mid_front_unrounded.mp3',
		'ȅ': 'extra-low-tone_close-mid_front_unrounded.mp3',
		'e᷄': 'high-rising-contour_close-mid_front_unrounded.mp3',
		'ě': 'rising-contour_close-mid_front_unrounded.mp3',
		'e᷅': 'low-rising-contour_close-mid_front_unrounded.mp3',
		'ê': 'falling-contour_close-mid_front_unrounded.mp3',
		'e᷈': 'rising-falling-contour_close-mid_front_unrounded.mp3',
	}, audio = new Audio();
	document.onclick = function(e) {
		e = e || window.event;
		var t = e.target, url;
		if (t.nodeName === 'EM') {
			t = t.innerHTML;
			url = audios[t];
			if (url) {
				audio.src = '/assets/audios/' + url;
				audio.play();
			}
		}
	};
</script>