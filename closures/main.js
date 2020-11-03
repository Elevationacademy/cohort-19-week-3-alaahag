// const Family = function () {
//     const members = []

//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }

//     return birth
// }

// const giveBirth = Family()
// giveBirth("Clarissa")
// giveBirth("Mayana")


// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     };

//     const subtract = function (x, y) {
//         return x - y;
//     };

//     const multiply = function (x, y) {
//         return x * y;
//     };

//     const divide = function (x, y) {
//         return x / y;
//     };

//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     };
// };

// const m = mathOperations();
// console.log(m.add(13, 29));
// console.log(m.mult(1.75, 24));
// console.log(m.mult(7, m.div(36, 6)));


// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user);
//     };

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user);
//         }
//     };

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     };
// };

// const usersModule = UsersModule();

// usersModule.addUser('Narkis');
// usersModule.addUser('alaa');
// usersModule.listUsers();
// //console.log(usersModule._users);


//ex1
// const StringFormatter = function()
// {
//     const capitalize_first = function(name)
//     {
//         console.log(name.charAt(0).toUpperCase() + name.slice(1));
//     };

//     const skewer_first = function(name)
//     {
//         console.log(name.replace(' ', '-'));
//     };

//     return{
//         capitalizeFirst: capitalize_first,
//         skewerCase: skewer_first
//     };
// };

// const formatter = StringFormatter();

// formatter.capitalizeFirst("dorothy"); //should print Dorothy
// formatter.skewerCase("blue box"); //should print blue-box


//ex2
// const Bank = function()
// {
//     let money = 500;

//     const depositCash = function(cash)
//     {
//         money+= cash;
//     };

//     const checkBalance = function()
//     {
//         console.log(money);
//     };

//     return {
//         deposit: depositCash,
//         showBalance: checkBalance
//     };
// };

// const bank = Bank();
// bank.deposit(200);
// bank.deposit(250);
// bank.showBalance(); //should print 950


//ex3
const SongsManager = function ()
{
    const _songs = {};
    const _youtubeBase = "https://www.youtube.com/watch?v=";

    //assumes the given URL is in the form of https://www.youtube.com/watch?v=kJQP7kiw5Fk
    const _extractIdentifier = url => url.split("").splice(32).join("");
    const _getUrl = identifier => _youtubeBase + identifier;

    const addSong = (name, url) => _songs[name] = _extractIdentifier(url);
    const getSong = name => console.log(_getUrl(_songs[name]));

    return {
        addSong: addSong,
        getSong: getSong
    };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
