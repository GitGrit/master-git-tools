![](images/vim;ogo.png)

# Text Editor: vim

{% hint style='tip' %}
The name "vi" is derived from an abbreviation for the EXtended line editor command `visual`, which switches that editor to its visual mode.  "vim" refers to a later clone of vi, called "vi improved".  When you type `vi` nowadays, `vim` will be run.  Impress your friends at parties with that fun nugget of computer science history!
{% endhint %}

You may already be accustomed to using an Integrated Development Environment \(IDE\) such as Visual Studio, Sublime, Eclipse, WebStorm, etc.  Technically, you can use any IDE for the labs, but vim is the one we'll be using in the instructions.  The best part about using vim is that it's already installed in all unix-style terminals, so if you installed iTerm2 or Commander, you're set.  This also means it's available on any remote \*nix style server you might connect to in the future.

The worst part about using vim, however, is that it isn't very intuitive.  This workshop is a good opportunity to learn vim if you've been avoiding it.  vi has three "modes": command mode, insert mode, and escape mode.  We'll talk about these more in a minute.  For now, try running `vi` from anywhere in your terminal just to get a feel for things.

Certain Git commands require a commit message or other kinds of text input.  When this happens, Git checks to see if you've configured a text editor.  If you haven't, it will open vim.  You may not even realize this has happened, because the terminal doesn't look very different.  But if you look closely, you're in "vim land", and it's waiting for you to type a command or text.

When vim starts, it's in command mode.  For our purposes, we want to get into insert mode so we can start typing some text, so we'll press `i`.  Notice that `-- INSERT --` appears in the lower left.  You'll type your message and hit the Escape key to get out of insert mode (and back into command mode).

Now we want to exit vim, but we want to either save or discard our results.  We enter `:` which switches command mode into escape mode.  The effect is subtle; if you look in the lower left again you'll see the colon.  Now you can enter `q` for quit or `wq` for write quit (force save).  If you want to discard the file (or changes to an existing file) without saving, you can type `q!`.

That's really the minimum amount of vim usage you need to know right now.  You can search the web for "vi tutorial" or "vi cheatsheet" if you want to dive in deeper.
