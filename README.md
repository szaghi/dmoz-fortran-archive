# dmoz-fortran-archive

> an unofficial archive of DMOZ http://www.dmoz.org/ Fortran section https://www.dmoz.org/Computers/Programming/Languages/Fortran/

### Why?

DMOZ, formerly the Open Directory Project, is shutting down on March 14, 2017. The Fortran section collected hundreds of categorized and annotated links that constitute a valuable resource for all *brave Fortraners*: it is our aim to preserve such an important resource.

### How?

Into this repository there is dumped archive of Fortran section: you can browse its sources [here](https://github.com/szaghi/dmoz-fortran-archive/tree/master/www.dmoz.org). Exploting the GitHub pages you can also browse the rendered pages served at the following link

#### https://szaghi.github.io/dmoz-fortran-archive/

The website dumping has been done by means of `wget`:

```bash
wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains dmoz.org --no-parent https://www.dmoz.org/Computers/Programming/Languages/Fortran/
```

### Copyrights [![License](http://i.creativecommons.org/l/by/3.0/80x15.png)]()

This work is licensed under a [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) Unported License.
