'use strict';

function* generateSequence() {
	yield 1;
	yield 2;
	return 3;
}

function* generateSequence2(start, end) {
	for (let i = start; i <= end; ++i)  yield i;

}

let g = generateSequence();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

let b = generateSequence();
for (let i of b) {
	console.log(i);
}

let c = [...generateSequence2(2, 5)];

console.log(c);

// генератор для получения и показа аватара
// он yield'ит промисы
function* showUserAvatar() {

	let githubFetch = yield fetch(`https://api.github.com/users/legidium`);
	let githubUserInfo = yield githubFetch.json();

	let img = new Image();
	img.src = githubUserInfo.avatar_url;
	img.className = "promise-avatar-example";
	document.body.appendChild(img);

	yield new Promise(resolve => setTimeout(resolve, 3000));

	img.remove();

	return img.src;
}

// вспомогательная функция-чернорабочий
// для выполнения промисов из generator
function execute(generator, yieldValue) {

	let next = generator.next(yieldValue);

	if (!next.done) {
		next.value.then(
			result => execute(generator, result),
			err => generator.throw(err)
		);
	} else {
		// обработаем результат return из генератора
		// обычно здесь вызов callback или что-то в этом духе
		alert(next.value);
	}

}

execute( showUserAvatar() );