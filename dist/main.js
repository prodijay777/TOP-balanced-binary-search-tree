(()=>{"use strict";function t(l){if(1===l.length)return l;{const e=Math.ceil(l.length/2);let i=t(l.slice(0,e)),r=t(l.slice(e)),f=[];for(;i[0]||r[0];)i[0]<r[0]?(f.push(i[0]),i.shift()):r[0]<i[0]?(f.push(r[0]),r.shift()):i[0]==r[0]?(f.push(i[0]),f.push(r[0]),i.shift(),r.shift()):i[0]?r[0]||(f.push(i[0]),i.shift()):(f.push(r[0]),r.shift());return f}}class l{constructor(t){this.data=t,this.left=null,this.right=null}}function e(t){if(0===t.length)return null;{const i=Math.floor(t.length/2),r=new l(t[i]);return r.left=e(t.slice(0,i)),r.right=e(t.slice(i+1)),r}}const i=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&i(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.data}`),null!==t.left&&i(t.left,`${l}${e?"    ":"│   "}`,!0))};let r=new class{constructor(l){this.root=function(l){let i=t(l);return e([...new Set(i)])}(l)}insert(t){!function t(e,i){if(i<e.data&&null==e.left){const t=new l(i);e.left=t}else if(i>e.data&&null==e.right){const t=new l(i);e.right=t}else{if(i<e.data)return t(e.left,i);if(i>e.data)return t(e.right,i);if(i==e.data)return void console.log("value already in tree, try another value")}}(this.root,t)}delete(t){!function t(l,e){if(console.log(l.left),l.left.data===e&&null===l.left.left&&null===l.left.right)l.left=null;else if(l.right.data===e&&null===l.right.left&&null===l.right.right)l.right=null;else if(l.left.data===e&&null!==l.left.left&&null===l.left.left.left&&null===l.left.left.right&&null===l.left.right)l.left=l.left.left;else if(l.left.data===e&&null!==l.left.right&&null===l.left.left.left&&null===l.left.left.right&&null===l.left.left)l.left=l.left.right;else if(l.right.data===e&&null!==l.right.left&&null===l.right.left.left&&null===l.right.left.right&&null===l.right.right)l.right=l.right.left;else if(l.right.data===e&&null!==l.right.right&&null===l.right.left.left&&null===l.right.left.right&&null===l.right.left)l.right=l.right.right;else{if(e<l.data)return t(l.left,e);if(e>l.data)return t(l.right,e)}}(this.root,t)}}([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]);r.insert(9),i(r.root),console.log("h"),r.delete(23),i(r.root),r.delete(3),i(r.root)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1ELEtBQzVDTyxFQUFLTixNQUFRTSxFQUFLTixNQUFNQSxVQUkzQixJQUFJSixFQUFRVSxFQUFLUixLQUNsQixPQUFPa0IsRUFBa0JWLEVBQUtQLEtBQU1ILEdBQ2pDLEdBQUtBLEVBQVFVLEVBQUtSLEtBQ3JCLE9BQU9rQixFQUFrQlYsRUFBS04sTUFBT0osRUFDekMsQ0FDSixDQUNBb0IsQ0FBa0JuQixLQUFLTyxLQUFNUixFQUNqQyxHRTFFYyxDQUFDLEVBQUcsRUFBRyxFQUFHLEdBQUksRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxHQUFJLEtBQU0sTUFPL0RlLEVBQVFJLE9BQU8sR0FDZlYsRUFBWU0sRUFBUVAsTUFFcEJLLFFBQVFDLElBQUksS0FDWkMsRUFBUU8sT0FBTyxJQUNmYixFQUFZTSxFQUFRUCxNQUNwQk8sRUFBUU8sT0FBTyxHQUNmYixFQUFZTSxFQUFRUCxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9iaW5hcnlTZWFyY2hUcmVlLmpzIiwid2VicGFjazovL3RvcC1iYWxhbmNlZC1iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvcHJldHR5UHJpbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBoYWxmID0gTWF0aC5jZWlsKGFycmF5Lmxlbmd0aC8yKVxuICAgICAgICAvLyBzcGxpdCBhcnJheSBpbiBoYWxmXG4gICAgICAgIGNvbnN0IGxlZnRIYWxmID0gYXJyYXkuc2xpY2UoMCwgaGFsZilcbiAgICAgICAgLy8gY2FsbCBtZXJnZVNvcnQgb24gdGhlIGxlZnQgaGFsZlxuICAgICAgICBsZXQgc29ydGVkTGVmdEhhbGYgPSBtZXJnZVNvcnQobGVmdEhhbGYpXG5cbiAgICAgICAgY29uc3QgcmlnaHRIYWxmID0gYXJyYXkuc2xpY2UoaGFsZilcbiAgICAgICAgLy8gY2FsbCBtZXJnZVNvcnQgb24gdGhlIHJpZ2h0IGhhbGZcbiAgICAgICAgbGV0IHNvcnRlZFJpZ2h0SGFsZiA9IG1lcmdlU29ydChyaWdodEhhbGYpO1xuXG4gICAgICAgIC8vZm9yIGVhY2ggZWxlbWVudCBpbiBsZWZ0IGhhbGYgYW5kIHJpZ2h0IGhhbGYsIHNlZSB3aGljaCBpcyBzbWFsbGVyXG4gICAgICAgIGxldCBtZXJnZWRBcnJheSA9IFtdO1xuICAgICAgICB3aGlsZSAoc29ydGVkTGVmdEhhbGZbMF0gfHwgc29ydGVkUmlnaHRIYWxmWzBdKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkTGVmdEhhbGZbMF0gPCBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGVkUmlnaHRIYWxmWzBdIDwgc29ydGVkTGVmdEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZFJpZ2h0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuXG4gICAgICAgICAgICAgICAgLy8gZWRnZSBjYXNlIHdoZXJlIHRoZSBzYW1lIG51bWJlciBpcyBiZWluZyBjb21wYXJlZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0ZWRMZWZ0SGFsZlswXSA9PSBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkUmlnaHRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgICAgIC8vIGVkZ2UgY2FzZSB3aGVyZSBvbmUgYXJyYXkgaXMgZW1wdHlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNvcnRlZExlZnRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRSaWdodEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkUmlnaHRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNvcnRlZFJpZ2h0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkTGVmdEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkTGVmdEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XG4gICAgfVxufSIsImltcG9ydCB7IG1lcmdlU29ydCB9IGZyb20gXCIuL21lcmdlU29ydFwiO1xuXG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByZXR0eVByaW50XCI7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YT0gdmFsdWU7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBidWlsZFRyZWUoYXJyYXkpO1xuICAgIH1cblxuXG4gICAgaW5zZXJ0KHZhbHVlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG5ld05vZGU7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEgJiYgbm9kZS5yaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQsIHZhbHVlKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQsIHZhbHVlKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgYWxyZWFkeSBpbiB0cmVlLCB0cnkgYW5vdGhlciB2YWx1ZVwiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCwgdmFsdWUpXG4gICAgfVxuXG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2RlLmxlZnQpXG4gICAgICAgICAgICAvLyBjb25zaWRlciBhdCBsZWFzdCB0aHJlZSBjYXNlc1xuICAgICAgICAgICAgLy8gZGVsZXRpbmcgdGhlIGxlYWYgbm9kZVxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLmxlZnQubGVmdCA9PT0gbnVsbCAmJiBub2RlLmxlZnQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLnJpZ2h0LmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVsZXRpbmcgYSBicmFuY2ggbm9kZSB3aXRoIG9uZSBsZWFmOyBwb2ludCB0aGUgcHJlY2VkaW5nIGNoaWxkIHRvIHRoZSAybmQgZm9sbG93aW5nIGNoaWxkXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5sZWZ0LmxlZnQgIT09IG51bGwgJiYgbm9kZS5sZWZ0LmxlZnQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLmxlZnQubGVmdC5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LmxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubGVmdC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLmxlZnQucmlnaHQgIT09IG51bGwgJiYgbm9kZS5sZWZ0LmxlZnQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLmxlZnQubGVmdC5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBub2RlLmxlZnQucmlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQubGVmdC5sZWZ0ID09PSBudWxsIFxuICAgICAgICAgICAgICAgICYmIG5vZGUucmlnaHQubGVmdC5yaWdodCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LmxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5yaWdodCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0LmxlZnQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLnJpZ2h0LmxlZnQucmlnaHQgPT09IG51bGwgJiYgbm9kZS5yaWdodC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LnJpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGluZyBhIGJyYW5jaCB3aXRoIGJvdGggbGVhdmVzOyBnZXQgdGhlIG5leHQgcmlnaHQsIHRoZW4gdGhlIG5leHQgbGVmdCBpIHRoaW5rXG4gICAgICAgICAgICAvLyB2YWx1ZSBpc24ndCB0aGVyZVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5sZWZ0LCB2YWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCwgdmFsdWUpXG4gICAgfVxuXG5cblxufVxuXG5mdW5jdGlvbiBidWlsZFRyZWUoYXJyYXkpIHtcbiAgICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbWVyZ2VTb3J0KGFycmF5KVxuICAgICAgICBsZXQgcmVtb3ZlZER1cGxpY2F0ZXMgPSBbLi4uIG5ldyBTZXQoc29ydGVkQXJyYXkpXVxuICAgICAgICByZXR1cm4gcmVjdXJzaXZlQnVpbGRUcmVlKHJlbW92ZWREdXBsaWNhdGVzKVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVCdWlsZFRyZWUoYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyB3aGF0IGRvIGkgbmVlZCB0byByZXR1cm4/IGFycmF5PyBub2RlP1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pZGRsZUluZGV4ID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGgvMilcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBOb2RlKGFycmF5W21pZGRsZUluZGV4XSlcblxuICAgICAgICByb290LmxlZnQgPSByZWN1cnNpdmVCdWlsZFRyZWUoYXJyYXkuc2xpY2UoMCwgbWlkZGxlSW5kZXgpKVxuICAgICAgICByb290LnJpZ2h0ID0gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5LnNsaWNlKG1pZGRsZUluZGV4ICsgMSkpXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0KHZhbHVlKSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhICYmIG5vZGUubGVmdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbmV3Tm9kZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdClcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgbm9kZSwgbWFrZSBpdCB0aGUgY2hpbGQgb2YgdGhlIHByZXZpb3VzIG5vZGUsIGFuZCB0aGUgbmV3IHJvb3Qgb2YgdGhlIG5leHQgbm9kZXNcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIGFscmVhZHkgaW4gdHJlZSwgdHJ5IGFub3RoZXIgdmFsdWVcIilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKClcbn0iLCJleHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICB9XG59OyIsIi8vIGltcG9ydCB7IE5vZGUsIFRyZWUsIGJ1aWxkVHJlZSB9IGZyb20gXCIuL2JpbmFyeVNlYXJjaFRyZWVcIjtcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9iaW5hcnlTZWFyY2hUcmVlXCI7XG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByZXR0eVByaW50XCI7XG5cbmNvbnN0IHRlc3RBcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF1cblxuXG4vLyBidWlsZFRyZWUodGVzdEFycmF5KVxubGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXN0QXJyYXkpXG4vLyBwcmV0dHlQcmludChuZXdUcmVlLnJvb3QpXG5cbm5ld1RyZWUuaW5zZXJ0KDkpXG5wcmV0dHlQcmludChuZXdUcmVlLnJvb3QpXG5cbmNvbnNvbGUubG9nKCdoJylcbm5ld1RyZWUuZGVsZXRlKDIzKVxucHJldHR5UHJpbnQobmV3VHJlZS5yb290KVxubmV3VHJlZS5kZWxldGUoMylcbnByZXR0eVByaW50KG5ld1RyZWUucm9vdCkiXSwibmFtZXMiOlsibWVyZ2VTb3J0IiwiYXJyYXkiLCJsZW5ndGgiLCJoYWxmIiwiTWF0aCIsImNlaWwiLCJzb3J0ZWRMZWZ0SGFsZiIsInNsaWNlIiwic29ydGVkUmlnaHRIYWxmIiwibWVyZ2VkQXJyYXkiLCJwdXNoIiwic2hpZnQiLCJOb2RlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsInRoaXMiLCJkYXRhIiwibGVmdCIsInJpZ2h0IiwicmVjdXJzaXZlQnVpbGRUcmVlIiwibWlkZGxlSW5kZXgiLCJmbG9vciIsInJvb3QiLCJwcmV0dHlQcmludCIsIm5vZGUiLCJwcmVmaXgiLCJpc0xlZnQiLCJjb25zb2xlIiwibG9nIiwibmV3VHJlZSIsInNvcnRlZEFycmF5IiwiU2V0IiwiYnVpbGRUcmVlIiwiaW5zZXJ0IiwicmVjdXJzaXZlRnVuY3Rpb24iLCJuZXdOb2RlIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==