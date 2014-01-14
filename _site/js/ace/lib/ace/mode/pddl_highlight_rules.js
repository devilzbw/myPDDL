/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* THIS FILE WAS AUTOGENERATED FROM /home/pold/.config/sublime-text-2/Packages/User/PDDL/pddl.tmLanguage (UUID: 2aef09fc-d29e-4efd-bf1a-974598feb7a9) */
/****************************************************************
 * IT MIGHT NOT BE PERFECT, PARTICULARLY:                       *
 * IN DECIDING STATES TO TRANSITION TO,                         *
 * IGNORING WHITESPACE,                                         *
 * IGNORING GROUPS WITH ?:,                                     *
 * EXTENDING EXISTING MODES,                                    *
 * GATHERING KEYWORDS, OR                                       *
 * DECIDING WHEN TO USE PUSH.                                   *
 * ...But it's a good start from an existing *.tmlanguage file. *
 ****************************************************************/

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var PDDLHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = { start: 
       [ { token: 'variable.other', regex: '\\?[A-Za-z]+' },
         { token: 'constant.numeric',
           regex: '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b' },
         { token: 'keyword.other',
           regex: ':(strips|typing|negative-preconditions|disjunctive-preconditions|equality|existential-preconditions|universal-preconditions|quantified-preconditions|conditional-effects|fluents|numeric-fluents|object-fluents|adl|durative-actions|duration-inequalities|continuous-effects|derived-predicates|timed-initial-literals|preferences|constraints|action-costs)' },
         { caseInsensitive: true,
           token: 'storage.type',
           regex: ':(requirements|types|constants|predicates|functions)' },
         { token: 'support.function',
           regex: '(assign|scale-up|scale-down|increase|decrease)' },
         { token: 'support.other',
           regex: '(forall|\\(at(\\s+)|over)' },
         { token: 'constant.language', regex: '(start|end|all)' },
         { caseInsensitive: true,
           token: 'keyword.operator',
           regex: '\\b(?:eq|neq|and|or)\\b' },
         { caseInsensitive: true,
           token: 'keyword.operator',
           regex: ':(parameters|duration|condition|effect|precondition)' }
         ] }
    
    this.normalizeRules();
};

oop.inherits(PDDLHighlightRules, TextHighlightRules);

exports.PDDLHighlightRules = PDDLHighlightRules;
});