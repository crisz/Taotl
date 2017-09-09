const allowedCards = ['ah', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '0h', 'jh', 'qh', 'kh',
                      'ad', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '0d', 'jd', 'qd', 'kd',
                      'ac', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '0c', 'jc', 'qc', 'kc',
                      'as', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '0s', 'js', 'qs', 'ks',
                      'at', '2t', '3t', '4t', '5t', '6t', '7t', '8t', '9t', '0t', 'jt', 'qt', 'kt',
                      'red god', 'black god', 'taotl', 'chipetl', 'hidden'];
export function getAllowedCards() {
  return allowedCards;
}

export function isAllowed(card) {
  return allowedCards.indexOf(card) !== -1;
}
