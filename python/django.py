import json
from collections import OrderedDict

from django.conf import settings
try:
    from django.core import urlresolvers
except ImportError:
    from django import urls as urlresolvers
try:
    from django.urls.exceptions import NoReverseMatch
except ImportError:
    from django.core.urlresolvers import NoReverseMatch
from django.utils.html import format_html
from django.utils.safestring import mark_safe

MAX = 75


class LogEntryAdminMixin(object):

    def created(self, obj):
        return obj.timestamp.strftime('%Y-%m-%d %H:%M:%S')
    created.short_description = 'Created'

    def user_url(self, obj):
        if obj.actor:
            app_label, model = settings.AUTH_USER_MODEL.split('.')
            viewname = 'admin:%s_%s_change' % (app_label, model.lower())
            try:
                link = urlresolvers.reverse(viewname, args=[obj.actor.id])
            except NoReverseMatch:
                return u'%s' % (obj.actor)
            return format_html(u'<a href="{}">{}</a>', link, obj.actor)

        return 'system'
    user_url.short_description = 'User'

    def msg_short(self, obj):
        if obj.action == 2:
            return ''  # delete
        changes = json.loads(obj.changes)
        s = '' if len(changes) == 1 else 's'
        fields = ', '.join(changes.keys())
        if len(fields) > MAX:
            i = fields.rfind(' ', 0, MAX)
            fields = fields[:i] + ' ..'
        return '%d change%s: %s' % (len(changes), s, fields)
    msg_short.short_description = 'Changes'

    def msg(self, obj):
        if obj.action == 2:
            return ''  # delete
        changes = json.loads(obj.changes)
        msg = '<table><tr><th>#</th><th>Field</th><th>From</th><th>To</th></tr>'
        for i, field in enumerate(sorted(changes), 1):
            value = [i, field] + (['***', '***'] if field == 'password' else changes[field])
            msg += format_html('<tr><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>', *value)

        msg += '</table>'
        return mark_safe(msg)
    msg.short_description = 'Changes'


class State(models.Model):
    name=models.CharField(max_length=150)

class City(models.Model):
    name=models.CharField(max_length=150)

class Student(models.Model):
    name=models.CharField(max_length=150)
    state_id=models.PositiveIntegerField()
    city_id=models.PositiveIntegerField()
    is_active = models.BooleanField(default=False)

students = Student.objects.filter(
        is_active=True,
    ).extra(
        select={
            'state':
                'SELECT name FROM state WHERE '
                'state.id = '
                'testapp_student.state_id',
            'city':
                'SELECT name FROM city WHERE '
                'city.id = '
                'testapp_student.city_id',
        },
    )


students_2 = Student.objects.extra(
        select=OrderedDict([('a', '%s'), ('b', '%s')]),
        select_params=('one', 'two'))

Students_3 = Student.objects.extra(where=["foo='a' OR bar = 'a'", "baz = 'a'"])