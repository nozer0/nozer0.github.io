"use strict";

Number.normalize = function (n) {
	if (!n || +n === 0) { return '0'; }
	if (isNaN(n)) { return 'NaN'; }

	// the reason not use `toExponential` method is precision problem, for example,
	//	`(-0.000000000000000000000000000000023032399999999999).toExponential()`
	n = String(n);
	var s = n.replace(/^[+-]/, '').split('.'), int = s[0], frac = s[1] || '', exp = 0;
	if (int && int !== '0') {
		s = int.length;
		if (s === 1) {
			return (n[0] === '-' ? '-' : '') + (frac ? int + '.' + frac.replace(/0+$/, '') : int);
		}
		exp += s - 1;
		s = int[0] + '.' + (int.slice(1) + frac).replace(/0+$/, '');
	} else {
		s = frac.replace(/^0*/, '');
		exp += s.length - frac.length - 1;
		if (s.length > 1) {
			s = s[0] + '.' + s.slice(1);
		}
	}
	return (n[0] === '-' ? '-' : '') + s + 'e' + exp;
};

Number.unnormalize = function (n) {
	if (!n || +n === 0) { return '0'; }
	if (isNaN(n)) { return 'NaN'; }

	n = String(n);
	var s = n.replace(/^[+-]/, '').split(/[\.e]/), int = s[0] || '0', frac = s[1] || '', exp = +s[2], l = frac.length, t;
	if (exp < 0) {	// left move point
		t = -int.length;
		if (exp > t) {
			s = (int.slice(exp) + frac).replace(/0+$/, '');
			s = int.slice(0, exp) + (s.length ? '.' + s : '');
		} else {
			s = '0.' + new Array(t - exp + 1).join(0) + (int + frac).replace(/0+$/, '');
		}
	} else if (exp < l) {
		frac = frac.replace(/0+$/, '');
		s = (int + frac.slice(0, exp)).replace(/^0+/, '');
		s = (s.length ? s + '.' : '0.') + frac.slice(exp);
	} else {
		s = (int + frac.replace(/0+$/, '')).replace(/^0+/, '') + (exp > l ? new Array(exp - l + 1).join(0) : '');
	}
	return n[0] === '-' ? '-' + s : s;
};

Number.gap = function (n, len, sign) {
	n = String(n);
	var s = n.replace(/^[+-]/, '');
	len = (len || 8) - s.length;
	s = len >= 0 ? new Array(len + 1).join(sign || 0) + s : s.slice(-len);
	return n[0] === '-' ? '-' + s : s;
};

Number.quickConvert = function(n, dest, src) {
	// if (isNaN(n)) { return NaN; }
	var i, f;
	src = isNaN(src) ? 10 : src < 2 ? 2 : src > 36 ? 36 : parseInt(src, 10);
	dest = isNaN(dest) ? 10 : dest < 2 ? 2 : dest > 36 ? 36 : parseInt(dest, 10);
	if (src !== 10) {
		n = n + '';
		i = n.indexOf('.');
		if (i === -1) {	// int
			n = parseInt(n, src);
		} else {
			f = Number._parseFloat(n.slice(i + 1), src);
			if (isNaN(f)) return NaN;
			n = i ? parseInt(n, src) + String(f).slice(1) : f;
		}
	}
	return (+n).toString(dest);
};

Number._parseFloat = function(n, src) {
	var maps = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', f = n.toUpperCase(), i = 0, l = f.length, p = 1, x;
	n = 0;
	while (i < l) {
		p = p / src;
		x = maps.indexOf(f[i++]);
		if (x === -1) { return NaN; }
		n += x * p;
	}
	return n;
};

Number.bin2hex = function (bin) {
	//bin = bin.replace(/\s/g, '');
	var i = 0, l = bin.length, arr = [], maps = '0123456789ABCDEF';
	while (i < l) {
		arr.push(maps[(+bin[i++] ? 8 : 0) + (+bin[i++] ? 4 : 0) + (+bin[i++] ? 2 : 0) + (+bin[i++])]);
	}
	return arr.join('');
};

Number.bin2dec = function (bin) {
	if (+bin === 0) {
		return 0;
	}
	var t = bin.indexOf('.'), s = bin.replace(/[\-\.]/g, ''), i = -1, l = s.length, idx = t > 0 ? t - (bin > 0 ? 1 : 2) : l - 1, dec = 0;
	while (++i < l) {
		if (+s[i]) {
			dec += Math.pow(2, idx - i);
		}
	}
	return bin > 0 ? dec : -dec;
};

Number.dec2bin = function (dec, precision) {
	if (+dec === 0) {
		return '0';
	}
	var fac = Math.abs(dec), int = Math.floor(fac), frac = fac - int, arr, i, l, t;
	precision = precision || 24;
	if (int) {
		arr = [];
		do {
			arr.push(int % 2);
		} while ((int = int >> 1));
		int = arr.reverse().join('');
	}
	if (frac) {
		for (i = 0, l = int ? precision - arr.length : precision, arr = [], t = int ? 1 : 0; i < l; i += t) {
			frac *= 2;
			if (frac < 1) {
				arr.push(0);
			} else {
				arr.push(1);
				if (frac === 1) {
					break;
				}
				frac -= 1;
				t = 1;
			}
		}
		// round
		if (i === l && frac * 2 >= 1) {
			i = arr.length - 1;
			do {
				arr[i] ^= 1;
			} while (!arr[i--]);
		}
		frac = arr.join('');
	}
	t = frac ? int + '.' + frac : int;
	return dec > 0 ? t : '-' + t;
};

Number.bin2float = function (bin, len, el) {
		var s = bin.replace(/^[+-]/, ''), exp, m, ml, bias;
	if (s.length === 1) {
		exp = 0;
		m = '0';
	} else {
		s = Number.normalize(s).split('e');
		exp = +s[1] || 0;
		m = s[0].slice(2);
	}
	len = len || (m.length > 23 ? 64 : 32);
	if (exp === 0 && s === '0') {
		return new Array(len + 1).join(0);
	}
	el = el || (len > 32 ? 11 : 8);
	ml = len - el - 1;
	bias = Math.pow(2, el - 1) - 1;

	if (exp > bias) {	// overflow
		exp = new Array(el + 1).join(1);
		m = new Array(ml + 1).join(0);
	} else {
		if (exp > -bias) {    // normal
			exp = Number.gap(Number.dec2bin(exp + bias), el);
		} else {
			s = -bias - exp;
			exp = new Array(el + 1).join(0);
			m = (s ? new Array(s + 1).join(0) + '1' : '1') + m;
		}
		s = ml - m.length;
		if (s > 0) {
			m += new Array(s + 1).join(0);
		} else if (s < 0) {
			s = m.slice(ml);
			m = m.slice(0, ml);
			if (s === '1' ? m[ml - 1] === '1' : s[0] === '1') {	// Ties To Even
				m = m.replace(/01*$/, 1);
				m += new Array(ml - m.length + 1).join(0);
			}
		}
	}
	return (bin[0] === '-' ? 1 : 0) + exp + m;
};

function Float(n) {
	this.setValue(n);
	return this;
}

(function () {
	function float2bin(n, exp_len) {
		n = String(n).replace(/\s/g, '');
		var sign = n[0], el = exp_len || (n.length < 33 ? 8 : 11), exp = n.substr(1, el), m = n.slice(1 + el), bias;
		//ml = el ? n.length - 1 - el : (n.length < 33 ? 23 : 52);
		if (exp.indexOf('0') === -1) {    // all 1
			return m.indexOf('1') === -1 ? sign === 1 ? -Infinity : Infinity : NaN;
		}
		bias = Math.pow(2, el - 1) - 1;
		if (exp.indexOf('1') !== -1) {    // normal
			exp = Number.bin2dec(exp) - bias;
			if (exp < 0) {
				m = '0.' + new Array(-exp).join(0) + '1' + m;
			} else if (exp) {
				m = '1' + m.slice(0, exp) + '.' + m.slice(exp);
			} else {
				m = '1.' + m;
			}
		} else {    // all 0
			m = '0.' + new Array(bias).join(0) + m;
		}
		return sign === 1 ? '-' + m : m;
	}

	Float.prototype.setValue = function (n, len, el) {
		this._float = this._binary = this._decimal = this._hexdecimal = this._len = this._exponent_len = null;
		var l = n.length - 1, type = n[l];
		if (type === 'b' || type === 'B') {
			l = n.slice(0, l);
			this._binary = Number.unnormalize(l);
			this._float = Number.bin2float(l, len, el);
		} else if (type === 'f' || type === 'F') {
			this._float = n.slice(0, l);
			this._exponent_len = el;
		} else if (/^[\-0-9\.]+(?:e-?\d)?$/.test(n)) {
			this._binary = Number.dec2bin(this._decimal = Number.unnormalize(n));
			this._float = Number.bin2float(this._binary, len, el);
		}
	};
	Float.prototype.binary = function () {
		if (!this._binary) {
			this._binary = Number.unnormalize(float2bin(this._float, this._exponent_len));
		}
		return this._binary;
	};
}());

Float.prototype.decimal = function () {
	if (!this._decimal) {
		this._decimal = Number.bin2dec(this.binary());
	}
	return this._decimal;
};
Float.prototype.hexdecimal = function () {
	if (!this._hexdecimal) {
		this._hexdecimal = Number.bin2hex(this.binary());
	}
	return this._hexdecimal;
};
Float.prototype.toString = function () {
	return this._float;
};
Float.prototype.equal = function (f) {
	return this._float === f._float;
};