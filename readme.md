# node in 10 mins

For my web developers meetup I volunteered to do a little presentation on Node.js.  Here's the code I'll be showing off.  It's mostly a combination of a few different tutorials.


### Notes:

Node does a bunch of things at once.  It's easy to confuse or acccidentally conceptually 
combine these separate features, but it's important to keep them separate.

    1. Node lets you run JavaScript outside of the browser.
        --CLI tools!  All async! (npm!)
        --Async *can* be easier.
        --JavaScript as a scripting language.
        --It's interpreted like Python/Ruby!
    2. Node is a event-driven
        --Great at handling tonnes of non-CPU-intensive processes + concurent inputs/outputs -> realtime websites
        --Bad at doing expensive syncronous tasks (large file transfers, fibonacci sequence).
        --Amazing at realtime webapps
    3. Node comes with npm, a package manager
        --Each app you have will have a package.json file
        --Easy to publish
        --Pitfalls of the "cloud": be prepared.