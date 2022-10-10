
var tnum = 'fi';

$(document).ready(function () {

	$(document).click(function (e) {
		$('.translate_wrapper, .more_lang').removeClass('active');
	});

	$('.translate_wrapper .current_lang').click(function (e) {
		e.stopPropagation();
		$(this).parent().toggleClass('active');

		setTimeout(function () {
			$('.more_lang').toggleClass('active');
		}, 5);
	});


	/*TRANSLATE*/
	translate(tnum);

	$('.more_lang .lang').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.more_lang').removeClass('active');

		var img = $(this).find('img').attr('src');
		var lang = $(this).attr('data-value');
		var tnum = lang;
		translate(tnum);

		$('.current_lang .lang-txt').text(lang);
		$('.current_lang img').attr('src', img);

		if (lang == 'ar') {
			$('body').attr('dir', 'rtl');
		} else {
			$('body').attr('dir', 'ltr');
		}

	});
});

function translate(tnum) {
	$('.pl-caro-hd1').text(trans[0][tnum]);
	$('.pl-caro-tx1').text(trans[1][tnum]);
	$('.pl-rd-mr').text(trans[2][tnum]);
	$('.pl-tm-hd1').text(trans[3][tnum]);
	$('.pl-tm-hd2').text(trans[4][tnum]);
	$('.pl-tm-hd3').text(trans[5][tnum]);
	$('.pl-tm-tx1').text(trans[6][tnum]);
	$('.pl-tm-tx2').text(trans[7][tnum]);
	$('.pl-tm-tx3').text(trans[8][tnum]);
	$('.pl-tm-rd-mr1').text(trans[9][tnum]);
	$('.pl-tm-rd-mr2').text(trans[10][tnum]);
	$('.pl-tm-rd-mr3').text(trans[11][tnum]);
	$('.pl-tmhd').text(trans[12][tnum]);

}


var trans = [
	{
		fi: 'Hyvinvoiva Eurooppa kaikille, ei harvoille.',
		en: 'A prosperous Europe for all, not for the few.',
		pt: 'Uma Europa próspera para todos, não para poucos.',
		fr: 'Une Europe prospère pour tous, pas pour quelques-uns.',
		cn: '一个为所有人而不是少数人的繁荣的欧洲。',
	},
	{
		fi: 'Olen tinkimätön ilmaston, ihmisoikeuksien ja sosiaalisen oikeudenmukaisuuden puolustaja. Haluan Euroopan, jossa hyvinvointi kuuluu kaikille, ei harvoille. Sen eteen teen töitä vasemmistoliiton europarlamentaarikkona. Ennen meppihommia toimin kansanedustajana ja kaupunginvaltuutettuna Helsingissä.',
		en: 'I am an uncompromising defender of the climate, human rights and social justice. I want a Europe where prosperity belongs to everyone, not the few. I work for that as an MEP of the Left Alliance. Before working as a member of parliament, I worked as an MP and a city councilor in Helsinki.',
		pt: 'Sou um defensor intransigente do clima, dos direitos humanos e da justiça social. Quero uma Europa onde a prosperidade pertença a todos, não a poucos. Trabalho para isso como eurodeputado da Aliança de Esquerda. Antes de trabalhar como parlamentar, trabalhei como parlamentar e vereador em Helsinque.',
		fr: 'Je suis un défenseur intransigeant du climat, des droits humains et de la justice sociale. Je veux une Europe où la prospérité appartient à tous, pas à quelques-uns. Je travaille pour cela en tant que député européen de l Alliance de gauche. Avant de devenir députée, j ai travaillé comme députée et conseillère municipale à Helsinki.',
		cn: '我是气候、人权和社会正义的坚定捍卫者。 我想要一个繁荣属于每个人而不是少数人的欧洲。 我作为左翼联盟的 MEP 为之工作。 在担任议会议员之前，我曾在赫尔辛基担任议员和市议员。',
	},
	{
		fi: 'Lue lisää',
		en: 'Read more',
		pt: 'consulte Mais informação',
		fr: 'Lire la suite',
		cn: '阅读更多',
	},
	{
		fi: 'ILMASTO',
		en: 'CLIMATE',
		pt: 'CLIMA',
		fr: 'CLIMAT',
		cn: '气候',
	},
	{
		fi: 'IHMISOIKEUDET',
		en: 'HUMAN RIGHTS',
		pt: 'DIREITOS HUMANOS',
		fr: 'DROITS HUMAINS',
		cn: '人权',
	},
	{
		fi: 'HYVINVOINTI',
		en: 'WELFARE',
		pt: 'BEM-ESTAR',
		fr: 'BIEN-ÊTRE',
		cn: '福利',
	},
	{
		fi: 'Ilmastokestävä tulevaisuus ei ole vain mahdollista, se on myös mahdollisuus rakentaa yhdessä vihreämpi ja oikeudenmukaisempi Eurooppa.',
		en: 'A climate-resilient future is not only possible, it is also an opportunity to build a greener and fairer Europe together.',
		pt: 'Um futuro resiliente ao clima não é apenas possível, é também uma oportunidade para construirmos juntos uma Europa mais verde e mais justa.',
		fr: 'Un avenir résilient au changement climatique n est pas seulement possible, c est aussi une opportunité de construire ensemble une Europe plus verte et plus juste.',
		cn: '一个适应气候变化的未来不仅是可能的，也是一个共同建设一个更绿色、更公平的欧洲的机会。',
	},
	{
		fi: 'Meidän on taisteltava niitä voimia vastaan, jotka yrittävät murentaa ihmisoikeuksia, demokratiaa ja oikeusvaltion periaatteita.',
		en: 'We must fight against the forces that are trying to erode human rights, democracy and the principles of the rule of law.',
		pt: 'Devemos lutar contra as forças que tentam corroer os direitos humanos, a democracia e os princípios do Estado de direito.',
		fr: 'Nous devons lutter contre les forces qui tentent d éroder les droits de l homme, la démocratie et les principes de l État de droit.',
		cn: '我们必须与试图侵蚀人权、民主和法治原则的势力作斗争。',
	}, {
		fi: 'Eurooppa voi sitä paremmin, mitä enemmän se pystyy investoimaan kansalaistensa hyvinvointiin ja sosiaalisiin oikeuksiin.',
		en: 'Europe is better off the more it can invest in the well-being and social rights of its citizens.',
		pt: 'A Europa fica melhor quanto mais puder investir no bem-estar e nos direitos sociais dos seus cidadãos.',
		fr: 'L Europe se porte mieux si elle peut investir davantage dans le bien-être et les droits sociaux de ses citoyens.',
		cn: '欧洲越能投资于其公民的福祉和社会权利，它的状况就会越好。',
	}, {
		fi: 'Lue ilmasto-teemasta',
		en: 'Read about the climate theme',
		pt: 'Leia sobre o tema do clima',
		fr: 'En savoir plus sur le thème du climat',
		cn: '阅读有关气候主题的信息',
	},
	{
		fi: 'Lue ihmisoikeudet-teemasta',
		en: 'Read about the human rights theme',
		pt: 'Leia sobre o tema dos direitos humanos',
		fr: 'En savoir plus sur le thème des droits de l homme',
		cn: '阅读有关人权主题的信息',
	},
	{
		fi: 'Lue hyvinvointi-teemasta',
		en: 'Read about the well-being theme',
		pt: 'Leia sobre o tema bem-estar',
		fr: 'En savoir plus sur le thème du bien-être',
		cn: '阅读有关幸福主题的信息',
	},
	{
		fi: 'TEEMAT',
		en: 'TOPIC',
		pt: 'TEMA',
		fr: 'SUJET',
		cn: '话题',
	},

];
