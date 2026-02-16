# Changelog

## [0.1.10](https://github.com/cagelab/cogmote/compare/cogmote-v0.1.9...cogmote-v0.1.10) (2026-02-16)


### Features

* :art: change icon ([#55](https://github.com/cagelab/cogmote/issues/55)) ([9541cd4](https://github.com/cagelab/cogmote/commit/9541cd4aca519b7dbf82f2315c5b89e95a40a9dc))
* :art: complete refactor by pyqt-fluentui ([33347c7](https://github.com/cagelab/cogmote/commit/33347c76370cfd48005cc45f46727e9782c557ee))
* :art: refactor ui by fluent ui ([da5c2f8](https://github.com/cagelab/cogmote/commit/da5c2f82ccf5642e8cae31a34f2e83184678b3bd))
* :boom: giveup previous configuration soluation, switch to json object mode ([4867fbe](https://github.com/cagelab/cogmote/commit/4867fbe110d7480d407e2369b8f3c90890d31b54))
* :construction: Add data source for plotter dialog ([db533fa](https://github.com/cagelab/cogmote/commit/db533fa4c8b248a88524bf322ebc43154b12d947))
* :construction: Add plot initialization and update logic ([a768562](https://github.com/cagelab/cogmote/commit/a768562d9cc71c6733ca7a3e48ddab2e04b2d98f))
* :construction: refactor ([b8afc63](https://github.com/cagelab/cogmote/commit/b8afc6320f24f91f97f562d28a7f85f8540a5bb1))
* :construction: refactor TrialDataView for data handling ([4e3a7a3](https://github.com/cagelab/cogmote/commit/4e3a7a3828e49a85eb63155d040458055aa94890))
* :heavy_plus_sign: add require of PyQt-Fluent-Widgets(https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/PySide6) ([8216e0f](https://github.com/cagelab/cogmote/commit/8216e0f2825957241e26eeacfc6825b02a03ccc1))
* :sparkles: add context menu with delete device option ([#53](https://github.com/cagelab/cogmote/issues/53)) ([c612ca8](https://github.com/cagelab/cogmote/commit/c612ca8618225514ed73f565b41cc300989264fb))
* :sparkles: add dark theme and custom title bar color ([#30](https://github.com/cagelab/cogmote/issues/30)) ([61d9534](https://github.com/cagelab/cogmote/commit/61d95347dec4ce9a9732ba180b550dc669642cfe))
* :sparkles: Add HTTP/2 support with h2 and hyperframe ([39338cf](https://github.com/cagelab/cogmote/commit/39338cfac6845575fbfef86f73c1abb84c4217f4))
* :sparkles: add recording support and give opengl backend ([c98d504](https://github.com/cagelab/cogmote/commit/c98d50412320a8d33dda9985ea0a7d3e52d2ecd7))
* :sparkles: data visualization ([9ceb064](https://github.com/cagelab/cogmote/commit/9ceb064738ff9043924df8448d29dda1dc4f3f59))
* :sparkles: Formal support for SSE mode listening data ([#4](https://github.com/cagelab/cogmote/issues/4)) ([0a4eb59](https://github.com/cagelab/cogmote/commit/0a4eb59629f005bd08691e48e3128734407dc586))
* :sparkles: persist devices data ([#25](https://github.com/cagelab/cogmote/issues/25)) ([437b43f](https://github.com/cagelab/cogmote/commit/437b43f42fc6c318b1e93054c09b625c3a656927))
* :tada: Init project ([a430468](https://github.com/cagelab/cogmote/commit/a430468a84ca663272df97b172688c6933aee485))
* :tada: Init project ([c04df7b](https://github.com/cagelab/cogmote/commit/c04df7b37d67db6ea110b45b0a25f14587016dad))
* :tada: switch from pyside6 to tauri2 ([4a6406b](https://github.com/cagelab/cogmote/commit/4a6406b96ac00848b2ccba6b75ed718183e0c2cc))
* 👷 Add pnpm installation to CI workflow ([#11](https://github.com/cagelab/cogmote/issues/11)) ([122d30f](https://github.com/cagelab/cogmote/commit/122d30fe1071c50d013871073f0fb3d8b5391a70))
* Add figure config and scatter plot support in Plotter ([6357d3f](https://github.com/cagelab/cogmote/commit/6357d3f52c8325f27fc97eebce5d3d9958cab5b7))
* Add furl and orderedmultidict dependencies ([3b28700](https://github.com/cagelab/cogmote/commit/3b287002f5d082cb543e112d63f609b9843994cc))
* Add WebRTCBackend for video monitoring ([0d721be](https://github.com/cagelab/cogmote/commit/0d721bebb92a41474c5c9d7a26388f27fafae555))
* **datamonitor:** :sparkles: add nested data display support ([#58](https://github.com/cagelab/cogmote/issues/58)) ([bf4a729](https://github.com/cagelab/cogmote/commit/bf4a72972a8597b585d632a41b9a52e967f9d55b))
* Enhance TrialDataCard with nickname and mode support ([f91b57f](https://github.com/cagelab/cogmote/commit/f91b57fbfb22b18edea090ed780592710431eb5b))
* **monitor:** :sparkles: add fullscreen mode for trial data monitor ([#56](https://github.com/cagelab/cogmote/issues/56)) ([ee66c13](https://github.com/cagelab/cogmote/commit/ee66c13bc68de58cb4d6a1ce5dde8ae44ebb553a))
* Refactor config and TrialDataStore with dataclass and enhancements ([91698c4](https://github.com/cagelab/cogmote/commit/91698c4e4bdfeac6a5746b2ebcc4096a594a4167))


### Bug Fixes

* :ambulance: change channel from mock to default ([#17](https://github.com/cagelab/cogmote/issues/17)) ([3316a54](https://github.com/cagelab/cogmote/commit/3316a543d6bb2febbf1f1cb187e360c7b2648548))
* :ambulance: High-concurrency detection of the cogmoteGO service ([#16](https://github.com/cagelab/cogmote/issues/16)) ([979e673](https://github.com/cagelab/cogmote/commit/979e6736ca0a6d457b7b58514be99e9d21b828f4))
* :bug: correct detect method condition check ([#29](https://github.com/cagelab/cogmote/issues/29)) ([8dffa88](https://github.com/cagelab/cogmote/commit/8dffa8806ef79c7a4c2a74110c5baa91b43c2869))
* :bug: Ensure listener thread stops properly in TrialDataView ([e4c497d](https://github.com/cagelab/cogmote/commit/e4c497d30a9a7d975b3e7f06c1b49bd91508c3f6))
* :bug: Fixed the issue of nested route navigation ([#32](https://github.com/cagelab/cogmote/issues/32)) ([2110a09](https://github.com/cagelab/cogmote/commit/2110a09567617bf77f6dd62ce031428347e8ee57))
* :bug: fixed the issue that parallel scanning cannot be performed under macos ([#24](https://github.com/cagelab/cogmote/issues/24)) ([2423096](https://github.com/cagelab/cogmote/commit/2423096184a31beedfd96b3a2ab436d999c325c1))
* :bug: give mica effect ([5b431a8](https://github.com/cagelab/cogmote/commit/5b431a8b4c6dc4c0ec24ffea4a28d747e2dadf92))
* :bug: Remove redundant connections and ensure proper cleanup in TrialDataView ([93ae5b6](https://github.com/cagelab/cogmote/commit/93ae5b6b9f7bd69122efef8d6fa5151f8970a7a9))
* :bug: Remove unused Deviceview import from router ([#10](https://github.com/cagelab/cogmote/issues/10)) ([d0414dd](https://github.com/cagelab/cogmote/commit/d0414dd67e0f0c31c8b38ddc00c2a286b84497c7))
* Ensure proper SSE listener cleanup and add finished signal ([8bc558b](https://github.com/cagelab/cogmote/commit/8bc558b4cefc7f5353cabcf60e0d89c1c29b127e))
* Optimize data concatenation in Plotter using np.append ([e919116](https://github.com/cagelab/cogmote/commit/e9191163cbf8b590d62eb7e43a072c02763992c5))
