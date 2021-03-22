module.exports = {
    name: 'args-info',
    description: 'Info about the arguments',
    execute(message, args) {
        if(!args.length){
            return message.channel.send(`You have not provided any arguments, ${message.author}`);
        } else if(args[0] === 'foo') {
            return message.channel.send('bar')
        }
        message.channel.send(`Arguments: ${args} \nArguments Length: ${args.length}`)
    }
};