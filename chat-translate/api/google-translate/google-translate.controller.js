const Translate = require("@");
const projectId = "ocr-proyect-eoi";

module.exports = {
  translateMsg: translateMsg,
  detectecLanguage: detectecLanguage
};

// Instantiates a client
const translate = new Translate({
  projectId: projectId
});

function translateMsg(req, res) {
  let text = req.body.text;
  let language = req.body.language;
  console.log(req.body);

  translate.translate(text, language).then(results => {
    const translation = results[0];
    res.json(translation);
  });
}

function detectecLanguage(req, res) {
  let text = req.body.text;
  translate.detect(text).then(results => {
    let detections = results[0];
    res.json(detections.language);
  });
}
