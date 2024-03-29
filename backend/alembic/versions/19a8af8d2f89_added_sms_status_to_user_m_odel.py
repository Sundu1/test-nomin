"""added sms_status to user m'odel

Revision ID: 19a8af8d2f89
Revises: eeff0fd52306
Create Date: 2023-12-18 17:56:15.153416

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '19a8af8d2f89'
down_revision = 'eeff0fd52306'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'sms_status',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'sms_status',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###
