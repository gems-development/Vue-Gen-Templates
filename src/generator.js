class Generator {
  static generateCard(cardData) {
    if (cardData == null)
      return '<div>Loading...</div>';
    let template = '<div>';
    for (let fieldName in cardData.meta.fields) {
      let meta = cardData.meta.fields[fieldName];
      template += `<div>{{meta.fields['${fieldName}'].name}}<input type="${meta.editorType}" :value="obj.fields['${fieldName}'].value" @input="$store.dispatch('setCardValue', {fieldName:'${fieldName}', value: $event.target.value})"></div>`;
    }
    template += '</div>';
    return template;
  }
}
export default Generator;
