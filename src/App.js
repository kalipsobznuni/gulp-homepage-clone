import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
             return (
               <div className="app">
                <header>
                      <div className='container-lrg'>
                          <div className='col12'>
                                <a className='logo'>
                                  <img className='logo1' src="images/logo1.svg" />
                                </a>
                                <div className='mobcol12'>
                                <a className="link" href="https://github.com/gulpjs/gulp/blob/master/docs/API.md">Docs</a>
                                 <a className="link" href="http://gulpjs.com/plugins">Plugins</a>
                                 <a className="link" href="https://twitter.com/gulpjs">Twitter</a>
                                 <a className="link" href="https://github.com/gulpjs/gulp/blob/master/CONTRIBUTING.md">Contribute</a>
                                </div>
                          </div>
                      </div>
                      <div className='container-lrg'>
                            <div className='col12'>
                                  <h1 className='headingtext'>
                                          Automate and enhance your workflow
                                  </h1>
                            </div>
                      </div>
                      <div className='container-lrg'>
                            <div className='centerdev12'>
                                  <div className='computerwrap'>
                                      <div className='comp'>
                                          <div className='mask'>
                                            <div className='editor'>
                                            <pre>
                                              <code>
                                                  <span className="prefixed">npm install gulp-cli -g</span>
                                                  <span className="prefixed">npm install gulp -D</span>
                                                  <span className="prefixed">touch gulpfile.js</span>
                                                  <span className="prefixed">gulp --help</span>
                                                </code>
                                              </pre>
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                          </div>
                        <div className='container-sml'>
                          <div className='col12'>
                              <h2 className='paragraph'>
                              gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

                              </h2>
                              <div className='ctas'>
                                <a class='ctas-button' href ='https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md'>
                                Get Started
                                </a>
                              </div>
                          </div>
                      </div>
                    </header>

                    <div class="feature3">
                     <div class="container-lrg flex baseline">
                       <div class="col-4">
                         <b class="svg center"><img class="mask-img" src="images/browser.svg" /> </b>
                         <h3 class="subheading center">Simple Usage</h3>
                         <p class="paragraph">
                           By preferring code over configuration, node best practices, and a minimal API surface - gulp makes things simple like never before.
                         </p>
                       </div>
                       <div class="col-4">
                         <b class="svg center"><img class="mask-img" src="images/guage.svg"/></b>
                         <h3 class="subheading center">Efficient Builds</h3>
                         <p class="paragraph">
                           Using the power of node streams, gulp gives you fast builds that don't write intermediary files to disk.
                         </p>
                       </div>
                       <div class="col-4">
                         <b class="svg center"><img class="mask-img" src="images/atom.svg"/></b>
                         <h3 class="subheading center">Quality Ecosystem</h3>
                         <p class="paragraph">
                           By enforcing strict guidelines, we ensure our plugins stay simple and work as expected.
                         </p>
                       </div>
                     </div>
                   </div>

                   <div class="whatisgulp">
                      <div class="container-lrg">
                        <div class="col-12">
                          <div class="editor-window">
                            <div class="editor-menubar">
                              <span class="editor-button close"></span>
                              <span class="editor-button minimize"></span>
                              <span class="editor-button maximize"></span>
                              <span class="editor-filename">gulpfile.js</span>
                            </div>
                            <span class="hljs-keyword">var</span> gulp = <span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp'</span>);
                            <span class="hljs-keyword">var</span> pug = <span class="mobile-show"><br />  </span><span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-pug'</span>);
                            <span class="hljs-keyword">var</span> less = <span class="mobile-show"><br />  </span><span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-less'</span>);
                            <span class="hljs-keyword">var</span> minifyCSS = <span class="mobile-show"><br />  </span><span class="hljs-built_in">require</span>(<span class="hljs-string">'gulp-csso'</span>);
                            some code here
                          </div>
                        </div>
                      </div>
                    </div>

                  <div class="socialproof">
                            <div class="container-sml">
                              <div class="flex text-center">
                                <div class="col-12">
                                  <h4 class="subheading">
                                    "Builds can be the most awful sinkhole for teams to waste their time with - gulp is a serious win for any project."
                                  </h4>
                                  <p class="paragraph">Eric, Co-founder @ stae</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="footer">
                            <div class="container-sml">
                              <div class="col-12 text-center">
                                <div class="contribute-copy center vertical text-center">
                                  <h3 class="subheading">Become a backer </h3>
                                  <p class="paragraph">
                                    Support the community and keep development going strong.
                                  </p>
                                  <a class="ctas-button" href="https://opencollective.com/gulpjs">Donate</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       );
                     }
           }

 export default App;
