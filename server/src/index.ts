interface Console {
	log: (string) => void;
}

export const logVersion = (console: Console): void => {
	// use process.env.APP_VERSION in your health check to display the
	// deployed version of this application
	console.log(`current application version: ${process.env.APP_VERSION}`);
};

export const codeCoverageGrace = (console: Console): void => {
	console.log('Here are a few lines without coverage');
	console.log("It's so you don't waste your 100% code coverage leader board message with fake code");
	console.log('This also gives you a non-zero code coverage floor to start from on your first real commit');
	console.log("Now there's no excuse to try and get that force merged since it's not 100%");
	console.log('But if you are following TDD, it should be at 100% for a new project anyway, no?');
	console.log('What happens if we hit and keep 100% (or thereabouts) on a new repo?');
	console.log('Ask me when you get there.');
	console.log('Anyway make sure you delete this code.');
	console.log('Be better than 20%!');
	console.log('Good luck!');
	console.log('I know you can do it.');
	console.log("Don't let me down.");
};
